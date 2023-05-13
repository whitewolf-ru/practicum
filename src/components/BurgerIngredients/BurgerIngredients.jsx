
import React from 'react';
import Ingredient from './../Ingredient/Ingredient.jsx';
import Tabs from './../Tabs/Tabs.jsx';
import './BurgerIngredients.css';
import IngredientDetails from './../IngredientDetails/IngredientDetails.jsx';
import Modal from './../Modal/Modal.jsx';
import { IngredientsContext } from '../../utils/ingredientsContext.js';
import useModal from './../../hooks/UseModal.jsx';

function BurgerIngredients({ingredientsList}) {
   
   const ingredients = React.useContext(IngredientsContext);
   const buns = ingredients.filter((item) => item.type === 'bun');
   const mains = ingredients.filter((item) => item.type === 'main');
   const sauces = ingredients.filter((item) => item.type === 'sauce');

   const [ingredientSelected,selectIngredient] = React.useState(null);
   const { isModalOpen, openModal, closeModal } = useModal();

   function setModState(ingredient) {
      openModal();
      selectIngredient(ingredient);
   }

   return (
      <div className="BurgerIngredients">
         <Tabs/>
         <div className="BurgerIngredients-scroll-block">

            <ul className="IngredientsList">
               <li className="BurgerIngredients-section-title text text_type_main-medium"> Булки </li>
    
               <span className="BurgerIngredients-group-block">
               {
                 buns.map(ingredient =>
                    <li className="BurgerIngredients-li"
                       onClick={ (e) => { setModState(ingredient) } }
                       key={ingredient._id}>
                       <Ingredient ingredient={ingredient}/>
                    </li>
                 )
               }
               </span>
      
               <li className="BurgerIngredients-section-title text text_type_main-medium"> Соусы </li>
               
               <span className="BurgerIngredients-group-block">
               {
                 sauces.map(ingredient =>
                    <li className="BurgerIngredients-li"
                       onClick={ (e) => { setModState(ingredient) } }
                       key={ingredient._id}>
                       <Ingredient ingredient={ingredient}/>
                    </li>
                 )
               }
               </span>
      
               <li className="BurgerIngredients-section-title text text_type_main-medium"> Начинки </li>
      
               <span className="BurgerIngredients-group-block">
               {
                 mains.map(ingredient =>
                    <li className="BurgerIngredients-li"
                       onClick={ (e) => { setModState(ingredient) } }
                       key={ingredient._id}>
                       <Ingredient ingredient={ingredient}/>
                    </li>
                 )
               }
               </span>
            </ul>
   
         </div>
         {
            isModalOpen===true &&
               <Modal className="window" header="детали ингредиента" onClose={closeModal}>
                  <IngredientDetails ingredient={ingredientSelected}/>
               </Modal>
         }
      </div>
   )
}

export default BurgerIngredients;

