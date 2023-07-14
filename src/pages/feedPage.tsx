
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "../hooks/index";

import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'

import styles_global from "./../styles.module.css";
import styles from "./feedPage.module.css";
import OrderBrief from '../components/OrderBrief/OrderBrief';
import { TfeedOrder } from '../utils/types';
import OrdersList from "../components/OrdersList/OrdersList";
import OrdersDone from "../components/OrdersDone/OrdersDone";
import OrdersInProgress from "../components/OrdersInProgress/OrdersInProgress";

function Feed() {

   //const dispatch = useDispatch();
   const location = useLocation();

   //useEffect(
   //   () => { dispatch({ type: WS_CONNECTION_START, method: "orders/all" }) }, [] // eslint-disable-line react-hooks/exhaustive-deps
   //);

   const items: TfeedOrder[] = useSelector((store: any) => store.socket.items);
   const total: number = useSelector((store: any) => store.socket.total);
   const totalToday: number = useSelector((store: any) => store.socket.totalToday);
   //const items: feedOrder[] = [];
   //console.log("items", items);

   return (
      <>
         <div className={`${styles_global.page_container} `}>

            <div className={styles.page}>
               <div className={styles.header}>
                  Лента заказов
               </div>
               <div className={styles.block}>
                  <OrdersList />
               </div>
            </div>

            <div className={styles.page}>
               <div className={styles.columns}>
                  <div className={styles.done}>
                     Готовы
                     <OrdersDone />
                  </div>
                  <div className={styles.in_progress}>
                     В работе
                     <OrdersInProgress />
                  </div>
               </div>
               <div className={`text text_type_main-medium`}>
                  Выполнено за всё время
                  <p className={`text text_type_digits-large`}>{total}</p>
               </div>
               <div className={`text text_type_main-medium`}>
                  Выполнено сегодня
                  <p className={`text text_type_digits-large`}>{totalToday}</p>
               </div>
            </div>

         </div>

      </>
   )
}

export default Feed;
