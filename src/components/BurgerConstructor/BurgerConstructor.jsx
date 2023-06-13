
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useDrop } from 'react-dnd';
import { nanoid } from '@reduxjs/toolkit'

import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './BurgerConstructor.module.css';
import ConstructorItem from './../ConstructorItem/ConstructorItem.jsx';
import TotalPrice from './../TotalPrice/TotalPrice.jsx';
import OrderDetails from './../OrderDetails/OrderDetails.jsx';
import useModal from './../../hooks/UseModal.jsx';
import Modal from './../Modal/Modal.jsx';
import { orderUpload } from "../../services/actions/order.js";
import { ITEM_ADD, ITEM_DELETE, BUN_ADD } from '../../services/actions/constructorActions.js';
import { INGREDIENTS_COUNTER_INCREMENT, INGREDIENTS_COUNTER_DECREMENT } from '../../services/actions/ingredientsActions.js';

function BurgerConstructor() {

   const itemsGet = () => state => state.constructorItems;
   const { items, bun } = useSelector(itemsGet());
   const ingredientsGet = () => state => state.ingredientsItems.ingredients.list;
   const ingredients = useSelector(ingredientsGet());

   const dispatch = useDispatch();
   //const location = useLocation();

   const { isModalOpen, modalOpen, modalClose } = useModal();

   const isLoggedIn = useSelector((store) => store.user.isLoggedIn);

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

      // А давайте запихнём наноид сюда!
      item.uuid = nanoid();

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

   const navigate = useNavigate();

   const orderId = useSelector(state => state.order.orderId);

   function orderProcess() {
      if (isLoggedIn) {
         let data = [];
         items.map(ingredient => { return data.push(ingredient._id) })
         dispatch(orderUpload(data));
         modalOpen();
         ingredients.map(ingredient => ingredient.counter = 0);
      } else {
         navigate("/login", { replace: true });
      }
   }

   const dropStyle = isHover ? { background: "#eee" } : { background: "#0f0" };

   return (
      <div className={styles.BurgerConstructor}>

         {bun && <ConstructorItem item={bun} isLocked={true} type="top" />}

         <ul className={styles.burgerconstructor_scroll_block} ref={dropTarget}>
            {
               items &&
               items.map((item, i) => <li key={item.uuid}><ConstructorItem item={item} itemIndex={i} moveable={true} handleClose={itemDelete} style={dropStyle} /></li>)
            }
         </ul>

         {bun && <ConstructorItem item={bun} isLocked={true} type="bottom" />}

         <p className={`${styles.constructor_footer} text text_type_digits-medium`}>
            <TotalPrice className="mr10" />
            {
               bun && items &&
               <Button htmlType="button" type="primary" size="small" onClick={orderProcess}>
                  Оформить заказ
               </Button>
            }
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
