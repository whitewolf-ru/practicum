
import React from 'react';
import { useSelector } from 'react-redux';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './TotalPrice.module.css';

function TotalPrice() {

   const itemsGet = () => state => state.constructorItems;
   const { items, bun}  = useSelector(itemsGet());
   
   const sum = React.useMemo(
      function () {
         const bunPrice = bun !== null ? bun.price * 2 : 0;
         const itemsPrice = items.length > 0 ?
            items.reduce(
               function (currentSum, element) {
                  return currentSum + element.price * (element.type === "bun" ? 2 : 1);
               }, 0)

            :
            0
         const sum = bunPrice + itemsPrice;
         return sum;
      }
   );

   return (
      <span className={styles.total_price}>
         {sum} <CurrencyIcon type="primary" className={styles.buckazoid} />
      </span>
   )
}

export default TotalPrice;
