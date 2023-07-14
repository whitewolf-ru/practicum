
import React from "react";

import { useSelector, useDispatch } from "../../hooks/index";
import { TfeedOrder } from '../../utils/types';
import styles from './OrdersDone.module.css';

function OrdersDone() {
   const items = useSelector((state: any) => state.socket.items).filter((item: TfeedOrder) => { return item.status === "done" });

   // Я что-то не пойму, я сюда за реактом пришёл, или учиться рисовать круглые кружочки со столбцами?! Пусть будет так.
   const listShow = (column: number) => {
      let content: JSX.Element[] = [];
      const start = column == 1 ? 0 : 9;
      const end = column == 1 ? items.length > 10 ? 10 : items.length : items.length > 20 ? 19 : items.length;
      for (let i = start; i < end; i++) {
         content.push(<div> {items[i].number} </div>);
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
