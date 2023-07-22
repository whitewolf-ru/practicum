
import React from "react";
//import { useSelector } from 'react-redux';
import { useSelector } from "../../hooks/index";

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './TotalPrice.module.css';
import { Tingredient } from '../../utils/types'

function TotalPrice() {

   const { items, bun } = useSelector((state) => state.constructorItems);

   const sum: number = React.useMemo(
      function () {
         const bunPrice = bun && bun !== null ? bun.price * 2 : 0;
         const itemsPrice = items && items?.length > 0 ?
            items.reduce(
               function (currentSum: number, element: Tingredient) {
                  return currentSum + element.price * (element.type === "bun" ? 2 : 1);
               }, 0)
            :
            0
         const sum = bunPrice + itemsPrice;
         return sum;
      }, []
   );

   return (
      <span className={styles.total_price}>
         {sum} <span className={styles.buckazoid}><CurrencyIcon type="primary" /></span>
      </span>
   )
}

export default TotalPrice;
