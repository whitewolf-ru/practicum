
import React from "react";

import { useSelector } from "../../hooks/index";
//import { TsocketItem } from "../../services/reducers/socketReducer"
import styles from './OrdersDone.module.css';

function OrdersDone() {
   const { orders } = useSelector(state => state.socket);
   console.log("orders",orders);
   const itemsList = orders && orders.length>0 ? orders.filter(item => { return item.status === "done" }) : [];

   const listShow = (column: number) => {
      let content: JSX.Element[] = [];
      const start = column === 1 ? 0 : 9;
      const end = column === 1 ? itemsList.length > 10 ? 10 : itemsList.length : itemsList.length > 20 ? 19 : itemsList.length;
      for (let i = start; i < end; i++) {
         content.push(<div key={i}> {itemsList[i].number} </div>);
      }
      return content;
   };

   return (
      <div className={`${styles.columns} text text_type_digits-default`}>
         <div className={styles.item}>
            {listShow(1)}
         </div>
         <div className={styles.item}>
            {listShow(2)}
         </div>
      </div>
   )
}

export default OrdersDone;
