import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "../../hooks/index";

import styles_global from "./../../styles.module.css";
import styles from "./UserHistory.module.css";
import OrderBrief from '../../components/OrderBrief/OrderBrief';
import { WS_CONNECTION_START } from '../../services/actions/socketActions';
import { TfeedOrder } from '../../utils/types';
import OrdersList from "../OrdersList/OrdersList";

export function UserHistory() {
   const dispatch = useDispatch();

   useEffect(
      () => { dispatch({ type: WS_CONNECTION_START, method: "orders" }) }, [] // eslint-disable-line react-hooks/exhaustive-deps
   );

   const items: TfeedOrder[] = useSelector((store: any) => store.socket.items);

   return (
      <div className={styles.list}>
         <div className={styles.block}>
            <OrdersList showStatus={true}/>
         </div>
      </div>
   )
}
