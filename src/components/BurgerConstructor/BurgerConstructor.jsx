
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';

import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './BurgerConstructor.module.css';
import ConstructorItem from './../ConstructorItem/ConstructorItem.jsx';
import OrderDetails from './../OrderDetails/OrderDetails.jsx';
import Modal from './../Modal/Modal.jsx';
import TotalPrice from './../TotalPrice/TotalPrice.jsx';
import { orderUpload } from './../../utils/burger-api.js';
import useModal from './../../hooks/UseModal.jsx';
import { ITEM_ADD, ITEM_DELETE } from '../../services/actions/constructorActions.js';
import { ORDER_UPDATE } from '../../services/actions/order.js';
import { INGREDIENTS_COUNTER_INCREMENT, INGREDIENTS_COUNTER_DECREMENT } from '../../services/actions/ingredientsActions.js';

function BurgerConstructor() {
   const { items } = useSelector(state => state.constructorItems);
   const ingredients = useSelector(state => state.ingredientsItems).ingredients.list;

   const { isModalOpen, modalOpen, modalClose } = useModal();
   const [orderId, setOrderId] = React.useState(0);

   const dispatch = useDispatch();

   const bun = items.filter((item) => item.type === 'bun')[0];
   const list = items.filter((item) => item.type !== 'bun');

   function itemRemove(uniqueId, itemId) {
      dispatch({ type: ITEM_DELETE, uniqueId: uniqueId });
      dispatch({ type: INGREDIENTS_COUNTER_DECREMENT, itemId: itemId });
   }

   function itemMove(item) {
      // Фигарим item
      dispatch({ type: ITEM_ADD, item: item });
      // Увеличиваем счётчик
      dispatch({ type: INGREDIENTS_COUNTER_INCREMENT, item: item });
   }

   const [, dropTarget] = useDrop({
      accept: "items",
      collect: monitor => ({
         isHover: monitor.isOver(
         )
      }),
      drop({ itemId }) {

         const item = ingredients.filter((item) => { return item._id === itemId })[0];

         // А может, элемент уже перетащили?
         const itemsAlreadyMoved = items.filter((element) => element._id === item._id).length;
         const isBun = item.type === "bun";

         // Если не булка или булка, но не перенесённая
         if (!isBun || (isBun && !itemsAlreadyMoved)) itemMove(item);

         // Сносим предыдущую булку
         if (isBun && !itemsAlreadyMoved && bun) itemRemove(bun.uniqueId, bun._id);

      }
   })

   function orderProcess() {

      let data = [];

      items.map(ingredient => { return data.push(ingredient._id) })

      orderUpload(data, setOrderId)
         .then((result) => {
            dispatch({ type: ORDER_UPDATE, orderId: result.order.number });
         })
         .catch(function (error) {
            console.log("Вот тебе раз!");
         });

      modalOpen();

   }

   return (
      <div className={styles.BurgerConstructor}>

         {bun && <ConstructorItem item={bun} isLocked={true} type="top" />}

         <ul className={styles.burgerconstructor_scroll_block} ref={dropTarget}>
            {
               list &&
               list.map((item, i) => <li key={Math.random()}><ConstructorItem item={item} itemIndex={i} moveable={true} handleClose={itemRemove} /></li>)
            }
         </ul>

         {bun && <ConstructorItem item={bun} isLocked={true} type="bottom" />}

         <p className={`${styles.constructor_footer} text text_type_digits-medium`}>
            <TotalPrice className="mr10" />
            <Button htmlType="button" type="primary" size="small" onClick={orderProcess}>
               Оформить заказ
            </Button>
         </p>
         {
            isModalOpen &&
            <Modal className="window" header="&nbsp;" onClose={modalClose}>
               <OrderDetails orderId={orderId} />
            </Modal>
         }

      </div>
   )
}

export default BurgerConstructor;
