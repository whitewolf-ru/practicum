
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './ingredient.css';
import IngredientDetails from './../components/IngredientDetails/IngredientDetails';
import { Tingredient } from '../utils/types';

function Ingredient() {
   const ingredientId = useParams().id!.substring(1);
   const location = useLocation();

   // Смотрим, откуда пришли
   const source = location.state && location.state.background;

   const ingredientsGet = () => (state: any) => state.ingredientsItems.items;
   const ingredients = useSelector(ingredientsGet());
   const item = ingredients ?
      ingredients.filter((item: Tingredient) => { return item._id === ingredientId })[0]
      :
      {
         _id: "0",
         name: "По-видимому, это проблема должна уйти в продакшне",
         type: "some secret type",
         price: 1,
         image: "some porn pic",
         image_mobile: "some mobile porn pic",
         image_large: "some huge porn pic"
      }

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
