
import React from "react";
import { useParams } from 'react-router-dom';

import { FormattedDate, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import { useSelector } from "../../hooks/index";
import { TfeedOrder, Tingredient } from '../../utils/types';
import styles from './OrderShow.module.css';

function OrderShow() {
   const orderId = useParams().id!.substring(1);
   // const { items }: { items: TfeedOrder[] } = useSelector(state => state.socket);
   const orders = useSelector((state: any) => state.socket.items).filter((item: TfeedOrder) => { return item.status === "done" });
   const ingredients = useSelector((state: any) => state.ingredientsItems.items);

   const order = orders && orders.length > 0 ?
      orders.filter((order: TfeedOrder) => { return order._id === orderId })[0]
      :
      {
         _id: "",
         ingredients: [],
         status: "",
         name: "",
         createdAt: "2023-07-13T15:15:15.413Z",
         updatedAt: "2023-07-13T15:15:15.526Z",
         number: 0
      }

   const status = order?.status === "done" ? "Выполнен" : "В работе";
   const data: { counter: number, item: Tingredient }[] = [];

   if (order?.ingredients)
      for (let i in order.ingredients) {
         const id = order.ingredients[i];
         const item = ingredients.filter((item: Tingredient) => { return item._id === id })[0];
         if (!data[id]) { data[id] = { item: item, counter: 1 } } else { data[id].counter++; }
      }

   let priceTotal = 0;

   const ingredientsShow = (data: { counter: number, item: Tingredient }[]) => {
      let content: JSX.Element[] = [];
      for (let i in data) {
         const item = data[i];
         priceTotal += item.item.price * item.counter;
         content.push(
            <tr key={item.item._id} className={styles.tr}>
               <td> <img src={item.item.image_mobile} alt="{item.item.name}" /> </td>
               <td align="left"> {item.item.name} </td>
               <td align="right" className={styles.tr}> {item.counter} x {item.item.price * item.counter} </td>
               <td> <CurrencyIcon type="primary" /> </td>
            </tr>
         );
      }
      return content;
   };

   return (
      <div className={`${styles.order} text text_type_main-small`}>
         <p>#{order.number}</p>
         <p className={`${styles.name} text text_type_main-medium`}>{order.name}</p>
         <p className={`${styles.status} text text_type_main-small`}>{status}</p>
         <p className={styles.content}>Состав:</p>
         <div className={styles.ingredients}>
            <table width="100%">
               <tbody>
                  {ingredientsShow(data)}
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

export default OrderShow;
