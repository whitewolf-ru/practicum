
import React from 'react';
import styles from './BurgerConstructor.module.css';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import ConstructorItem from './../ConstructorItem/ConstructorItem.jsx';
import OrderDetails from './../OrderDetails/OrderDetails.jsx';
import Modal from './../Modal/Modal.jsx';
import TotalPrice from './../TotalPrice/TotalPrice.jsx';
import { orderUpload } from './../../utils/burger-api.js';
import { ConstructorContext } from '../../utils/constructorContext.js';
import useModal from './../../hooks/UseModal.jsx';

function BurgerConstructor() {
   const ingredients = React.useContext(ConstructorContext);
   const { isModalOpen, openModal, closeModal } = useModal();
   const [orderId,setOrderId] = React.useState(0);

   function orderProcess() {
      let data = [];
      ingredients.list.map(ingredient => { return data.push(ingredient._id) })
      data.push(ingredients.bun._id);

      orderUpload(data,setOrderId)
         .then((result) => { console.log("Result",result) })
         .catch(function(error) {  
            console.log("Вот тебе раз!");  
         });
      
      openModal();

   }

   return (
      <div className={styles.BurgerConstructor}>

         <ConstructorItem item={ingredients.bun} isLocked={true} type="top"/>
         <ul className={styles.burgerconstructor_scroll_block}>
            {ingredients.list.map(ingredient => <li key={ingredient._id}><ConstructorItem item={ingredient} moveable={true}/></li>)}
         </ul>
         <ConstructorItem item={ingredients.bun} isLocked={true} type="bottom"/>


         <p className={`${styles.constructor_footer} text text_type_digits-medium`}>
            <TotalPrice className="mr10"/>
            <Button htmlType="button" type="primary" size="small" onClick={orderProcess}>
               Оформить заказ
            </Button>
         </p>
         {
            isModalOpen &&
               <Modal className="window" header="&nbsp;" onClose={closeModal}>
                  <OrderDetails orderId={orderId}/>
               </Modal>
         }
      </div>
   )
}

export default BurgerConstructor;
