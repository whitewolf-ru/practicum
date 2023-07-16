
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from "../../hooks/index";

import styles_global from "../../styles.module.css";
import styles from "./OrdersList.module.css";
import OrderBrief from '..//OrderBrief/OrderBrief';
import { TfeedOrder } from '../../utils/types';

function OrdersList({ showStatus }: { showStatus?: boolean }) {
   const { items }: { items: TfeedOrder[] } = useSelector(state => state.socket);
   // const total = useSelector(store => store.socket.total);
   // const totalToday: number = useSelector(store => store.socket.totalToday);
   const location = useLocation();
   const path = location.pathname;

   let link = "";

   if (path.indexOf("/feed") >= 0) link = "/feed/:";
   if (path.indexOf("/profile/orders") >= 0) link = "/profile/orders/:";

   return (
      <>
         <div className={`${styles_global.page_container} `}>
            <div className={styles.page}>
               <div className={styles.block}>
                  {
                     items && (
                        items.map(
                           (item: TfeedOrder, i: number) => {
                              return (
                                 <li key={item.number} className={styles.order}>
                                    <Link to={`${link}${item._id}`} state={{ background: location }} key={i} className={`${styles.link} text BurgerIngredients-li`}>
                                       <OrderBrief item={item} showStatus={showStatus} />
                                    </Link>
                                 </li>
                              )
                           }
                        )
                     )
                  }
               </div>
            </div>
         </div>
      </>
   )
}

export default OrdersList;
