
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
//import { useSelector } from 'react-redux';
import { useSelector } from "../../hooks/index";

import Ingredient from '../Ingredient/Ingredient';
import Tabs from '../Tabs/Tabs';
import './BurgerIngredients.css';
import { Tingredient } from '../../utils/types'

function BurgerIngredients() {

   const location = useLocation();
   const { items }: { items: Tingredient[] } = useSelector((state) => state.ingredientsItems);
   const buns = items.filter((item: Tingredient) => item.type === 'bun');
   const mains = items.filter((item: Tingredient) => item.type === 'main');
   const sauces = items.filter((item: Tingredient) => item.type === 'sauce');

   const [currentTab, setCurrentTab] = React.useState("buns");

   const handleScroll = (e: React.UIEvent<HTMLElement>) => {
      const parent = document.getElementById("ingredientsContainer")!.getBoundingClientRect();

      let nearestElement = 1e9, activeTab: string = "buns";
      const tabs = ["buns", "sauces", "mains"];

      for (let i in tabs) {
         const child = document!.getElementById(tabs[i])!.getBoundingClientRect();
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
         <div id="ingredientsContainer" className="BurgerIngredients-scroll-block" onScroll={handleScroll}>

            <ul className="IngredientsList">
               <li id="buns" className="BurgerIngredients-section-title text text_type_main-medium"> Булки </li>
               <span className="BurgerIngredients-group-block">
                  {
                     buns.map((ingredient: Tingredient) =>
                        <Link to={`/ingredient/:${ingredient._id}`} state={{ background: location }} key={ingredient._id} className="text BurgerIngredients-li">
                           <span className="BurgerIngredients-li">
                              <Ingredient ingredient={ingredient} />
                           </span>
                        </Link>
                     )
                  }
               </span>

               <li id="sauces" className="BurgerIngredients-section-title text text_type_main-medium"> Соусы </li>

               <span className="BurgerIngredients-group-block">
                  {
                     sauces.map((ingredient: Tingredient) =>
                        <Link to={`/ingredient/:${ingredient._id}`} state={{ background: location }} key={ingredient._id} className="text BurgerIngredients-li">
                           <span className="BurgerIngredients-li">
                              <Ingredient ingredient={ingredient} />
                           </span>
                        </Link>
                     )
                  }
               </span>

               <li id="mains" className="BurgerIngredients-section-title text text_type_main-medium"> Начинки </li>

               <span className="BurgerIngredients-group-block">
                  {
                     mains.map((ingredient: Tingredient) =>
                        <Link to={`/ingredient/:${ingredient._id}`} state={{ background: location }} key={ingredient._id} className="text BurgerIngredients-li">
                           <span className="BurgerIngredients-li">
                              <Ingredient ingredient={ingredient} />
                           </span>
                        </Link>
                     )
                  }
               </span>
            </ul>

         </div>
      </div>
   )
}

export default BurgerIngredients;
