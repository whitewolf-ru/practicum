// Карточка заказа в ленте заказов

import React from "react";

import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'

import { useSelector } from "../../hooks/index";
import styles from './OrderBrief.module.css';
import { Tingredient } from "../../utils/types";
import OrderItem from "../OrderItem/OrderItem";
import PriceTotal from "./PriceTotal/PriceTotal";

function OrderBrief({ item, showStatus }: { item: any, showStatus?: boolean }) {
   const items_max = 5;
   const order_types: { [key: string]: string } = { "created": "создан", "pending": "в работе", "done": "выполнен" }
   const ingredients = item.ingredients;
   //console.log("ingredients", ingredients);

   const { items }: { items: Tingredient[] } = useSelector(state => state.ingredientsItems);
   //console.log("items",items);

   const price = ingredients.map(
      (item: string, i: number) => {
         const ingredient = items.filter((i: Tingredient) => { return i._id === item })[0];
         //console.log("ingredient",ingredient);
         return ingredient?.price;
      }
   )

   //console.log("price", price);

   const price_total = price.reduce((partialSum: number, a: number) => partialSum + a, 0);

   return (
      <div className={styles.order}>

         <div className={styles.header}>
            #{item.number}
            <span className="text_color_inactive">
               <FormattedDate date={new Date(item.createdAt)} />
            </span>
         </div>

         <div className={`${styles.name} text text_type_main-medium`}>
            {item.name}
         </div>
         {
            showStatus &&
            <div className={styles.order_status}>
               {order_types[item.status]}
            </div>
         }
         <div className={styles.items}>
            <span className={styles.items}>
               {
                  ingredients && ingredients.length > 0 &&
                  ingredients.map(
                     (item: string, i: number) => {
                        if (i < 5) {
                           return (
                              <span key={i}>
                                 <OrderItem itemId={item} index={i} />
                              </span>
                           )
                        }
                     }
                  )
               }
               {
                  ingredients.length > items_max &&
                  <span key={-1}>
                     <OrderItem itemId={ingredients[5]} itemsLeft={ingredients.length - items_max} index={-1} />
                  </span>
               }
            </span>
            <PriceTotal price={price_total} />
         </div>
      </div>
   )
}

export default OrderBrief;
