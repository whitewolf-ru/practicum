
import React from "react";

import { useSelector } from "../../hooks/index";
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
   const { items }: { items: Tingredient[] } = useSelector(store => store.ingredientsItems);
   const item = items.filter((item: Tingredient) => { return item._id === itemId })[0];
   const iconClass = itemsLeft ? styles.icon_inactive : styles.icon;

   return (
      <div className={styles.item} style={{ "left": "10px", "marginLeft": "-25px", "zIndex": 10 - index }}>
         <img src={item?.image_mobile} className={iconClass} />
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
