
import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ConstructorContext } from '../../utils/constructorContext.js';
import styles from './TotalPrice.module.css';

function TotalPrice() {
   const ingredients = React.useContext(ConstructorContext);	// Пусть будет так
   const sum = ingredients.list.reduce(function (currentSum, element) { return currentSum + element.price }, 0)
   return (
      <span className={styles.total_price}>
         {sum} <CurrencyIcon type="primary" className={styles.buckazoid}/>
      </span>
   )
}

export default TotalPrice;
