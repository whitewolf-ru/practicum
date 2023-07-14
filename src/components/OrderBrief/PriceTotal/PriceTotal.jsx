
import React from "react";

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './PriceTotal.module.css';

function PriceTotal({ price }: { price: number }) {
   return (
      <>
         <div className={styles.order}>
            <div className={styles.header}>
               <span className="text_color_inactive">
               </span>
            </div>
            <div className={styles.name}>
               {price}<CurrencyIcon />
            </div>
         </div>
      </>
   )
}

export default PriceTotal;
