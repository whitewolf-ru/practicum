
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from "../hooks/index";

import IngredientDetails from './../components/IngredientDetails/IngredientDetails';
import { Tingredient } from '../utils/types';

function Ingredient() {
   const ingredientId = useParams().id!.substring(1);
   const location = useLocation();

   // Смотрим, откуда пришли
   const source = location.state && location.state.background;
   const { items }: { items: Tingredient[] } = useSelector(state => state.ingredientsItems);
   const item: Tingredient = items.filter(item => { return item._id === ingredientId })[0];

   if (source) {
      return (
         <IngredientDetails ingredient={item} />
      )
   }

   // Приход по прямой ссылке
   return (
      <IngredientDetails ingredient={item} />
   )
}

export default Ingredient;
