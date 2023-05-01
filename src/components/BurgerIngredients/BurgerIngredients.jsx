
import PropTypes from 'prop-types';
import Ingredient from './../Ingredient/Ingredient.jsx';
import Tabs from './../Tabs/Tabs.jsx';
import './BurgerIngredients.css';
import IngredientsPropsList from './../IngredientsPropsList/IngredientsPropsList.jsx';

function BurgerIngredients({ingredientsList}) {
   
   const buns = ingredientsList.filter((item) => item.type === 'bun');
   const mains = ingredientsList.filter((item) => item.type === 'main');
   const sauces = ingredientsList.filter((item) => item.type === 'sauce');

   return (
      <div className="BurgerIngredients">
         <Tabs/>
         <div className="BurgerIngredients-scroll-block" style={{ display: "flex", flexWrap: "wrap" }}>

            <ul className="IngredientsList">
            <li className="BurgerIngredients-section-title text text_type_main-medium"> Булки </li>

            <span className="BurgerIngredients-group-block">
            {
              buns.map(ingredient =>
                 <Ingredient ingredient={ingredient} key={ingredient._id}/>
              )
            }
            </span>
   
            <li className="BurgerIngredients-section-title text text_type_main-medium"> Соусы </li>
            
            <span className="BurgerIngredients-group-block">
            {
              sauces.map(ingredient =>
                 <Ingredient ingredient={ingredient} key={ingredient._id}/>
              )
            }
            </span>
   
            <li className="BurgerIngredients-section-title text text_type_main-medium"> Начинки </li>
   
            <span className="BurgerIngredients-group-block">
            {
              mains.map(ingredient =>
                 <Ingredient ingredient={ingredient} key={ingredient._id}/>
              )
            }
            </span>
            </ul>
   
         </div>
      </div>
   )
}

BurgerIngredients.propTypes = {
  ingredientsList: IngredientsPropsList
};

export default BurgerIngredients;
