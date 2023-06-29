
import React from "react";

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import IngredientsPropsShape from '../IngredientsPropsShape/IngredientsPropsShape';
import styles from './Ingredient.module.css';
import { useDrag } from 'react-dnd';
import { Tingredient } from '../../utils/types'

function Ingredient({ ingredient }: { ingredient: Tingredient }) {

   const counter = (ingredient.counter) ?
      () => <span className={styles.counter}><Counter count={ingredient.counter} size="default" /></span> :
      () => <div />

   const itemId = ingredient._id;

   const [, ref] = useDrag({
      type: 'items',
      item: { itemId },
      collect: monitor => ({
         opacity: monitor.isDragging() ? 0.9 : 1
      })
   });

   return (
      <div className={`${styles.ingredient_container} text text_type_main-small`} ref={ref}>
         <div className={"counter"}> {counter()} </div>
         <img src={ingredient.image} style={{ width: "200px" }} alt={ingredient.name} />
         <div className="text text_type_main-medium">{ingredient.price} <CurrencyIcon type="primary" /></div>
         <div className="text text_type_main-small"> {ingredient.name} </div>
      </div>
   )
}

Ingredient.propTypes = {
   ingredient: IngredientsPropsShape
};

export default Ingredient;
