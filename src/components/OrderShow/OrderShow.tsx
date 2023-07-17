
import React from "react";
import { useParams } from 'react-router-dom';

import { FormattedDate, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import { useSelector } from "../../hooks/index";
import styles from './OrderShow.module.css';

function OrderShow() {
   const orderId = useParams().id!.substring(1);
   //const ordersDone = useSelector(state => state.socket.orders).filter(item => { return item.status === "done" });
   const ingredients = useSelector(state => state.ingredientsItems.items);

   //const order = ordersDone.filter(order => { return order._id === orderId })[0];
   const orders = useSelector(state => state.socket.orders);
   console.log("orders", orders);

   const order = orders.filter(order => { return order._id === orderId })[0]

   console.log("order", order);

   const status = order?.status === "done" ? "Выполнен" : "В работе";

   const ingredientsQuantity = order
      ? order.ingredients.reduce((acc, element) => {
         acc[element] = (acc[element] || 0) + 1;
         return acc;
      }, {} as Record<string, number>)
      : undefined;

   const orderIngredients = order ? [...new Set(order.ingredients)] : [];

   let priceTotal = 0;

   const ingredientsShow = () => {
      let content: JSX.Element[] = [];
      for (let i in orderIngredients) {
         const id = order.ingredients[i];
         const item = ingredients.filter(item => { return item._id === id })[0];
         let priceItem = 0;
         const counter = ingredientsQuantity ? ingredientsQuantity[id] : 0;
         if (ingredientsQuantity) {
            priceTotal += item.price * ingredientsQuantity[id];
            priceItem = item.price * ingredientsQuantity[id];
         }
         //console.log(ingredientsQuantity[id],item.price);
         content.push(
            <tr key={item._id} className={styles.tr}>
               <td> <img src={item.image_mobile} alt="{item.item.name}" /> </td>
               <td align="left"> {item.name} </td>
               <td align="right" className={styles.tr}> {counter} x {priceItem} </td>
               <td> <CurrencyIcon type="primary" /> </td>
            </tr>
         );
      }
      return content;
   };

   return (
      <>
         {
            order && (
               <div className={`${styles.order} text text_type_main-small`}>
                  <p>#{order.number}</p>
                  <p className={`${styles.name} text text_type_main-medium`}>{order.name}</p>
                  <p className={`${styles.status} text text_type_main-small`}>{status}</p>
                  <p className={styles.content}>Состав:</p>
                  <div className={styles.ingredients}>
                     <table width="100%">
                        <tbody>
                           {ingredientsShow()}
                        </tbody>
                     </table>
                  </div>
                  <div className={styles.footer}>
                     <span className="text_color_inactive">
                        <FormattedDate date={new Date(order.createdAt)} />
                     </span>
                     <span>
                        <span>{priceTotal}</span> <CurrencyIcon type="primary" />
                     </span>
                  </div>
               </div>
            )
         }
      </>
   )
}

export default OrderShow;
