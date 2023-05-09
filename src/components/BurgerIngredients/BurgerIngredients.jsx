
import React from 'react';
import PropTypes from 'prop-types';
import Ingredient from './../Ingredient/Ingredient.jsx';
import Tabs from './../Tabs/Tabs.jsx';
import './BurgerIngredients.css';
import IngredientsPropsShape from './../IngredientsPropsShape/IngredientsPropsShape.jsx';
import WindowIngredient from './../WindowIngredient/WindowIngredient.jsx';
import Modal from './../Modal/Modal.jsx';

function BurgerIngredients({ingredientsList}) {
   
   const buns = ingredientsList.filter((item) => item.type === 'bun');
   const mains = ingredientsList.filter((item) => item.type === 'main');
   const sauces = ingredientsList.filter((item) => item.type === 'sauce');

   const [modalState,setModalState] = React.useState(false);
   const [ingredient_selected,selectIngredient] = React.useState(null);

   function setModState(ingredient) {
      setModalState(!modalState);
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
         modalState &&
            <Modal className="window" header="детали ингредиента" onClose={setModState}>
               <WindowIngredient ingredient={ingredient_selected}/>
            </Modal>
         }
      </div>
   )
}

BurgerIngredients.propTypes = {
  ingredientsList: PropTypes.arrayOf(IngredientsPropsShape).isRequired
};

export default BurgerIngredients;
