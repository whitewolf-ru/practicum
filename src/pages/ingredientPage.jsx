
import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './ingredient.css';
import Modal from './../components/Modal/Modal.jsx';
import IngredientDetails from './../components/IngredientDetails/IngredientDetails.jsx';

function Ingredient() {

   let ingredientId = useParams().id.substring(1);

   console.log("%cingredientsPage","color:blue");

   const location = useLocation();
   console.log("ingredientsPage: location", location);

   // Смотрим, откуда пришли
   const source = location.state && location.state.background;
   console.log("ingredientsPage: source", source);

   const navigate = useNavigate();

   const ingredientsGet = () => state => state.ingredientsItems.ingredients.list;
   const ingredients = useSelector(ingredientsGet());
   const modalCloseHandler = () => navigate(-1);
   const item = ingredients ? ingredients.filter((item) => { return item._id === ingredientId })[0] : null;

   if (source) {
      return (
         <div>
            <Modal className="window" header="детали ингредиента" onClose={() => modalCloseHandler()}>
               <IngredientDetails ingredient={item} />
            </Modal>
         </div>
      )
   }

   // Приход по прямой ссылке
   return (
      <div>
         <IngredientDetails ingredient={item} />
      </div>
   )
}

export default Ingredient;
