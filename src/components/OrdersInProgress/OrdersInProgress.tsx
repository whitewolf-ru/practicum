
import React from "react";

import { useSelector } from "../../hooks/index";
//import { TfeedOrder } from '../../utils/types';
import styles from './OrdersInProgress.module.css';

function OrdersInProgress() {
   const { orders } = useSelector(state => state.socket);
   const itemsList = orders.filter(item => { return item.status !== "done" });

   return (
      <div className={styles.item}>
         {
            itemsList && itemsList.length > 0 &&
            itemsList.map(
               (item, i) => {
                  if (i < 15) {
                     return (
                        <li key={i} className={`${styles.order} text text_type_digits-default`}>
                        {item.number}
                           {/*<OrderItem itemId={item} index={i} />*/}
                        </li>
                     )
                  }
               }
            )
         }
      </div>
   )
}

export default OrdersInProgress;
