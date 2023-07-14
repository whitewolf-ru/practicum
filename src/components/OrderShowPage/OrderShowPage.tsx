
import React, { useEffect } from 'react';

import styles_global from "../../styles.module.css";
import styles from "./feedPage.module.css";
import OrderShow from "../OrderShow/OrderShow";

function OrderShowPage() {
   return (
      <div className={`${styles_global.page_container} `}>
         <OrderShow />
      </div>
   )
}

export default OrderShowPage;
