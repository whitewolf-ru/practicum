
import Ingredient from './../Ingredient/Ingredient.jsx';
import Tabs from './../Tabs/Tabs.jsx';
import './BurgerIngredients.css';
import PropTypes from 'prop-types';

function BurgerIngredients({ingredientsList}) {

   return (
      <div className="BurgerIngredients">
         <Tabs/>
         <div className="BurgerIngredients-scroll-block" style={{ display: "flex", flexWrap: "wrap" }}>

            <ul className="IngredientsList">
            <li className="BurgerIngredients-section-title text text_type_main-medium"> Булки </li>

            <span className="BurgerIngredients-group-block">
            {
              ingredientsList.filter(element => element.type==="bun").map(ingredient =>
                 <Ingredient ingredient={ingredient} key={ingredient._id}/>
              )
            }
            </span>
   
            <li className="BurgerIngredients-section-title text text_type_main-medium"> Соусы </li>
            
            <span className="BurgerIngredients-group-block">
            {
              ingredientsList.filter(element => element.type==="sauce").map(ingredient =>
                 <Ingredient ingredient={ingredient} key={ingredient._id}/>
              )
            }
            </span>
   
            <li className="BurgerIngredients-section-title text text_type_main-medium"> Начинки </li>
   
            <span className="BurgerIngredients-group-block">
            {
              ingredientsList.filter(element => element.type==="main").map(ingredient =>
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
  ingredientsList: PropTypes.array
};

export default BurgerIngredients;
