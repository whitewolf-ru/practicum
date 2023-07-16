
import React from 'react';
//import { useLocation } from 'react-router-dom';
import { useSelector } from "../hooks/index";

//import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components'

import styles_global from "./../styles.module.css";
import styles from "./feedPage.module.css";
//import OrderBrief from '../components/OrderBrief/OrderBrief';
//import { TfeedOrder } from '../utils/types';
import OrdersList from "../components/OrdersList/OrdersList";
import OrdersDone from "../components/OrdersDone/OrdersDone";
import OrdersInProgress from "../components/OrdersInProgress/OrdersInProgress";

function Feed() {
   //const location = useLocation();
   //const items: TfeedOrder[] = useSelector(state => state.socket);

   const { total }: { total: number } = useSelector(state => state.socket);
   const { totalToday }: { totalToday: number } = useSelector(state => state.socket);

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
