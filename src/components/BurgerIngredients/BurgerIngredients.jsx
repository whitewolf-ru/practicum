
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Ingredient from './../Ingredient/Ingredient.jsx';
import Tabs from './../Tabs/Tabs.jsx';
import './BurgerIngredients.css';
import IngredientDetails from './../IngredientDetails/IngredientDetails.jsx';
import Modal from './../Modal/Modal.jsx';
import useModal from './../../hooks/UseModal.jsx';
import { ITEM_UPDATE, ITEM_DELETE } from '../../services/actions/itemCurrent.js';

function BurgerIngredients() {

   const location = useLocation();

   console.log("%cBurgerIngredients","color:blue");

   console.log("location",location);

   const ingredientsGet = () => state => state.ingredientsItems.ingredients.list;
   const ingredients = useSelector(ingredientsGet());

   const buns = ingredients.filter((item) => item.type === 'bun');
   const mains = ingredients.filter((item) => item.type === 'main');
   const sauces = ingredients.filter((item) => item.type === 'sauce');

   const [ingredientSelected, selectIngredient] = React.useState(null);
   const { isModalOpen, modalOpen, modalClose } = useModal();

   const dispatch = useDispatch();

   // Открытие окна с ингредиентом
   function setModState(ingredient) {
      modalOpen();
      selectIngredient(ingredient);
      dispatch({ type: ITEM_UPDATE, item: ingredient });
   }

   const [currentTab, setCurrentTab] = React.useState("buns");

   // Функция закрытия окна, которую мы передадим "модальному", так сказать, окну для очистки state.item_current
   const modalCloseHandler = () => {
      dispatch({ type: ITEM_DELETE });
      modalClose();
   }

   const handleScroll = (e) => {
      const parent = document.getElementById("ingredientsContainer").getBoundingClientRect();
      let nearestElement = 1e9, activeTab;
      const tabs = ["buns", "sauces", "mains"];

      for (let i in tabs) {
         const child = document.getElementById(tabs[i]).getBoundingClientRect();
         const difference = Math.abs(child.top - parent.top);
         if (difference < nearestElement) {
            nearestElement = difference;
            activeTab = tabs[i];
         }
      }

      setCurrentTab(activeTab);

   };

   return (
      <div className="BurgerIngredients">
         <Tabs activeTab={currentTab} />
         <Outlet />
         <div id="ingredientsContainer" className="BurgerIngredients-scroll-block" onScroll={handleScroll}>

            <ul className="IngredientsList">
               <li id="buns" className="BurgerIngredients-section-title text text_type_main-medium"> Булки </li>

               <span className="BurgerIngredients-group-block">
                  {
                     buns.map(ingredient => 
                        <Link to={`/ingredient/:${ingredient._id}`} state={{ background: location }} key={ingredient._id} className="text BurgerIngredients-li">
                           <Ingredient ingredient={ingredient} className="BurgerIngredients-li" />
                        </Link>
                     )
                  }
               </span>

               <li id="sauces" className="BurgerIngredients-section-title text text_type_main-medium"> Соусы </li>

               <span className="BurgerIngredients-group-block">
                  {
                     sauces.map(ingredient =>
                        <Link to={`/ingredient/:${ingredient._id}`} state={{ background: location }} key={ingredient._id} className="text BurgerIngredients-li">
                           <Ingredient ingredient={ingredient} className="BurgerIngredients-li" />
                        </Link>
                     )
                  }
               </span>

               <li id="mains" className="BurgerIngredients-section-title text text_type_main-medium"> Начинки </li>

               <span className="BurgerIngredients-group-block">
                  {
                     mains.map(ingredient =>
                        <Link to={`/ingredient/:${ingredient._id}`} state={{ background: location }} key={ingredient._id} className="text BurgerIngredients-li">
                           <Ingredient ingredient={ingredient} className="BurgerIngredients-li" />
                        </Link>
                     )
                  }
               </span>
            </ul>

         </div>
         {
            isModalOpen === true &&
            <Modal className="window" header="детали ингредиента" onClose={() => modalCloseHandler()}>
               <IngredientDetails ingredient={ingredientSelected} />
            </Modal>
         }
      </div>
   )
}

export default BurgerIngredients;

