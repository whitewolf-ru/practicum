
import React from "react";

import { useSelector, useDispatch } from "../../hooks/index";
import { Tingredient } from '../../utils/types';
import styles from './OrderItem.module.css';

function OrderItem(
   { itemId, index, itemsLeft }:
      {
         itemId: string;
         index: number;
         itemsLeft?: number
      }
) {
   //if (itemsLeft) console.log("itemsLeft", itemsLeft);
   const ingredients = useSelector((state: any) => state.ingredientsItems.items);
   const item = ingredients.filter((item: Tingredient) => { return item._id === itemId })[0];
   //console.log("item", item);
   //      <div className={styles.item} style={{ "left": (index * 50) + 10 + "px", "zIndex": 10-index }}>

   const iconClass = itemsLeft ? styles.icon_inactive : styles.icon;


   return (
      <div className={styles.item} style={{ "left": "10px", "marginLeft": "-25px", "zIndex": 10 - index }}>
         <img src={item.image_mobile} className={iconClass} />
         {
            itemsLeft &&
            (
               <span className={styles.counter}> +{itemsLeft} </span>
            )
         }
      </div>
   )
}

export default OrderItem;
