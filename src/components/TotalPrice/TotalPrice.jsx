
import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { constructorContext } from '../../utils/constructorContext.js';

function TotalPrice() {
   const ingredients = React.useContext(constructorContext);	// Пусть будет так
   const sum = ingredients.list.reduce(function (current_sum, element) { return current_sum + element.price }, 0)
   return (
      <>
         {sum} <CurrencyIcon type="primary"/>
      </>
   )
}

export default TotalPrice;
