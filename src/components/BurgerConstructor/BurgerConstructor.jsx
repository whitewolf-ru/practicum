
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";
import { useDrop } from 'react-dnd';
import { nanoid } from '@reduxjs/toolkit'

import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './BurgerConstructor.module.css';
import ConstructorItem from './../ConstructorItem/ConstructorItem.jsx';
import OrderDetails from './../OrderDetails/OrderDetails.jsx';
import Modal from './../Modal/Modal.jsx';
import TotalPrice from './../TotalPrice/TotalPrice.jsx';
import useModal from './../../hooks/UseModal.jsx';
import { orderUpload } from "../../services/actions/order.js";
import { cookieGet } from "../../utils/functions.js";
import { ITEM_ADD, ITEM_DELETE, BUN_ADD } from '../../services/actions/constructorActions.js';
import { INGREDIENTS_COUNTER_INCREMENT, INGREDIENTS_COUNTER_DECREMENT } from '../../services/actions/ingredientsActions.js';

function BurgerConstructor() {

   const itemsGet = () => state => state.constructorItems;
   const { items, bun } = useSelector(itemsGet());
   const ingredientsGet = () => state => state.ingredientsItems.ingredients.list;
   const ingredients = useSelector(ingredientsGet());
   const { isModalOpen, modalOpen, modalClose } = useModal();
   const dispatch = useDispatch();

   // Удаление ингредиентов
   function itemDelete(uniqueId, itemId) {
      dispatch({ type: ITEM_DELETE, uniqueId: uniqueId });
      dispatch({ type: INGREDIENTS_COUNTER_DECREMENT, itemId: itemId });
   }

   // Добавление ингредиентов
   function itemAdd(item) {
      // Если новая булка, то уменьшить счётчик старой
      if (item.type === "bun" && item._id !== bun?._id && bun) {
         dispatch({ type: INGREDIENTS_COUNTER_DECREMENT, itemId: bun._id });
      }

      item.type === "bun" ? dispatch({ type: BUN_ADD, item: item }) : dispatch({ type: ITEM_ADD, item: item });

      dispatch({ type: INGREDIENTS_COUNTER_INCREMENT, item: item });
   }

   const [{ isHover }, dropTarget] = useDrop({
      accept: "items",
      collect: monitor => ({
         isHover: monitor.isOver()
      }),
      drop({ itemId }) {
         const item = ingredients.filter((item) => { return item._id === itemId })[0];

         // А может, элемент уже перетащили?
         const isBun = item.type === "bun";

         // Если не булка или булка, но не перенесённая
         if (!isBun || (isBun && bun?._id !== item._id)) itemAdd(item);

      }
   })

   const dropStyle = isHover ? { background: "#eee" } : { background: "#0f0" };

   const orderId = useSelector(state => state.order.orderId);

   function orderProcess() {
      const loggedIn = cookieGet("username") && cookieGet("username") !== "" ? true : false;
      let data = [];
      items.map(ingredient => { return data.push(ingredient._id) })
      if (loggedIn) {
         dispatch(orderUpload(data));
         modalOpen();
      }
   }

   return (
      <div className={styles.BurgerConstructor}>

         {bun && <ConstructorItem item={bun} isLocked={true} type="top" />}

         <ul className={styles.burgerconstructor_scroll_block} ref={dropTarget}>
            {
               items &&
               items.map((item, i) => <li key={nanoid()}><ConstructorItem item={item} itemIndex={i} moveable={true} handleClose={itemDelete} style={dropStyle} /></li>)
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
