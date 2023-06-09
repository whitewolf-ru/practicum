
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useDrop } from 'react-dnd';

import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './BurgerConstructor.module.css';
import ConstructorItem from '../ConstructorItem/ConstructorItem';
import TotalPrice from '../TotalPrice/TotalPrice';
import OrderDetails from '../OrderDetails/OrderDetails';
import useModal from '../../hooks/UseModal';
import Modal from '../Modal/Modal';
import { orderUpload } from "../../services/actions/order";
import { ITEM_ADD, ITEM_DELETE, BUN_ADD } from '../../services/actions/constructorActions';
import { INGREDIENTS_COUNTER_INCREMENT, INGREDIENTS_COUNTER_DECREMENT } from '../../services/actions/ingredientsActions';
import { Tingredient } from '../../utils/types';
import { TconstructorElement } from '../../utils/types';

function BurgerConstructor() {

   const itemsGet = () => (state: any) => state.constructorItems;
   const { items, bun } = useSelector(itemsGet());
   const ingredientsGet = () => (state: any) => state.ingredientsItems.items;
   const ingredients = useSelector(ingredientsGet());

   const dispatch: any = useDispatch();

   const { isModalOpen, modalOpen, modalClose } = useModal();

   const isLoggedIn = useSelector((store: any) => store.user.isLoggedIn);

   // Удаление ингредиентов
   function itemDelete(uniqueId: string, itemId: string) {
      console.log("itemDelete, itemId=%s, uniqueId=%s",itemId,uniqueId);
      dispatch({ type: ITEM_DELETE, uniqueId: uniqueId });
      dispatch({ type: INGREDIENTS_COUNTER_DECREMENT, itemId: itemId });
   }

   // Добавление ингредиентов
   function itemAdd(item: Tingredient) {
      // Если новая булка, то уменьшить счётчик старой
      if (item.type === "bun" && item._id !== bun?._id && bun) {
         dispatch({ type: INGREDIENTS_COUNTER_DECREMENT, itemId: bun._id });
      }

      item.type === "bun" ? dispatch({ type: BUN_ADD, item: item }) : dispatch({ type: ITEM_ADD, item: item });

      dispatch({ type: INGREDIENTS_COUNTER_INCREMENT, item: item });
   }

   const [{ isHover }, dropTarget] = useDrop<any, void, { isHover: boolean }>({
      accept: "items",
      collect: monitor => ({
         isHover: monitor.isOver()
      }),
      drop({ itemId }) {
         const item = ingredients.filter((item: Tingredient) => { return item._id === itemId })[0];

         // А может, элемент уже перетащили?
         const isBun = item?.type === "bun";

         // Если не булка или булка, но не перенесённая
         if ((item && !isBun) || (isBun && bun?._id !== item?._id)) itemAdd(item);

      }
   })

   const navigate = useNavigate();

   //const orderId = useSelector((state: any) => state.order.orderId);

   function orderProcess() {
      if (isLoggedIn) {
         let data: string[] = [];
         items.map((ingredient: Tingredient) => { return data.push(ingredient._id) })
         dispatch(orderUpload(data));
         modalOpen();
         ingredients.map((ingredient: Tingredient) => ingredient.counter = 0);
      } else {
         navigate("/login", { replace: true });
      }
   }

   //const dropStyle = isHover ? { background: "#eee" } : { background: "#0f0" };

   return (
      <div className={styles.BurgerConstructor}>

         {bun && <ConstructorItem item={bun} isLocked={true} type="top" handleClose={() => { }} />}

         <ul className={styles.burgerconstructor_scroll_block} ref={dropTarget}>
            {
               items && items.length > 0 &&
               items.map(
                  (item: TconstructorElement, i: number) => {
                     return (
                        <li key={item.uuid}>
                           <ConstructorItem item={item} itemIndex={i} moveable={true} handleClose={itemDelete} />
                        </li>
                     )
                  }
               )
            }
         </ul>

         {bun && <ConstructorItem item={bun} isLocked={true} type="bottom" handleClose={() => { }} />}

         <p className={`${styles.constructor_footer} text text_type_digits-medium`}>
            <TotalPrice />
            {
               bun && items &&
               <Button htmlType="button" type="primary" size="small" onClick={orderProcess}>
                  Оформить заказ
               </Button>
            }
         </p>

         {
            isModalOpen &&
            <div className="window" >
               <Modal header="&nbsp;" onClose={modalClose}>
                  <OrderDetails />
               </Modal>
            </div>
         }

      </div>
   )
}

export default BurgerConstructor;
