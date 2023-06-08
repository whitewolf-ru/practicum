
import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './ingredient.css';
import styles from './ingredientPage.module.css';
import IngredientDetails from './../components/IngredientDetails/IngredientDetails.jsx';

function Ingredient() {
   const ingredientId = useParams().id.substring(1);
   const location = useLocation();

   // Смотрим, откуда пришли
   const source = location.state && location.state.background;

   const ingredientsGet = () => state => state.ingredientsItems.ingredients.list;
   const ingredients = useSelector(ingredientsGet());
   const item = ingredients ? ingredients.filter((item) => { return item._id === ingredientId })[0] : { _id: "0" }

   if (source) {
      return (
         <Link key={item._id} to={{ pathname: `/ingredient/:${item._id}` }} replace={true} className={styles.link}>
            <IngredientDetails ingredient={item} />
         </Link >
      )
   }

   // Приход по прямой ссылке
   return (
      <IngredientDetails ingredient={item} />
   )
}

export default Ingredient;
