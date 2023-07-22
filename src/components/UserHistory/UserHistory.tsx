import React, { useEffect } from 'react';
import { useDispatch } from "../../hooks/index";

import styles from "./UserHistory.module.css";
import { WS_CONNECTION_START } from '../../services/actions/socketActions';
//import { TfeedOrder } from '../../utils/types';
import OrdersList from "../OrdersList/OrdersList";

export function UserHistory() {
   const dispatch = useDispatch();

   useEffect(
      () => { dispatch({ type: WS_CONNECTION_START, method: "orders" }) }, [] // eslint-disable-line react-hooks/exhaustive-deps
   );

   // const items: TfeedOrder[] = useSelector(state => state.socket);

   return (
      <div className={styles.list}>
         <div className={styles.block}>
            <OrdersList showStatus={true}/>
         </div>
      </div>
   )
}
