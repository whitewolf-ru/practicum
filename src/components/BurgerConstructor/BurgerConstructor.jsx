
import React from 'react';
import './BurgerConstructor.css';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import ConstructorItem from './../ConstructorItem/ConstructorItem.jsx';
import ConstructorFooter from './../ConstructorFooter/ConstructorFooter.jsx';
import WindowOrderFinal from './../WindowOrderFinal/WindowOrderFinal.jsx';
import Modal from './../Modal/Modal.jsx';
import TotalPrice from './../TotalPrice/TotalPrice.jsx';
import { orderUpload } from './../../utils/burger-api.js';
import { constructorContext } from '../../utils/constructorContext.js';

function BurgerConstructor() {
   const ingredients = React.useContext(constructorContext);
   const [modalState,setModalState] = React.useState(false);
   const setModState = () => { setModalState(!modalState) }

   const [orderId,setOrderId] = React.useState(0);

   function orderProcess() {
      console.log("orderProcess(): ingredients",ingredients);
      let data = [];
      ingredients.list.map(ingredient => { return data.push(ingredient._id) })
      data.push(ingredients.bun._id);
      console.log("data",data);
      orderUpload(data,setOrderId).then((result) => { console.log("RESULT",result) })
      setModalState(true);
   }

   return (
      <div className="BurgerConstructor">
         <ConstructorItem item={ingredients.bun} isLocked={true} type="top"/>
         <ul className="BurgerConstructor-scroll-block">
            {ingredients.list.map(ingredient => <li key={ingredient._id}><ConstructorItem item={ingredient} moveable={true}/></li>)}
         </ul>
         <ConstructorItem item={ingredients.bun} isLocked={true} type="bottom"/>
         <p className="ConstructorFooter text text_type_digits-medium">
            <TotalPrice/>
            <Button htmlType="button" type="primary" size="small" onClick={orderProcess} style={{marginLeft: 10}}>
               Оформить заказ
            </Button>
         </p>
         {
            modalState &&
               <Modal className="window" header="&nbsp;" onClose={setModState}>
                  <WindowOrderFinal order_id={orderId}/>
               </Modal>
         }
      </div>
   )
}

export default BurgerConstructor;
