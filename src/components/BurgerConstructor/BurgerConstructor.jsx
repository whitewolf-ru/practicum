
import './BurgerConstructor.css';
import ConstructorItem from './../ConstructorItem/ConstructorItem.jsx';
import ConstructorFooter from './../ConstructorFooter/ConstructorFooter.jsx';
import IngredientsPropsList from './../IngredientsPropsList/IngredientsPropsList.jsx';

function BurgerConstructor({ingredientsList}) {
   const array_size = ingredientsList.length-1;
   return (
      <div className="BurgerConstructor">
         <ConstructorItem item={ingredientsList[0]} isLocked="true" type="top"/>
         <ul className="BurgerConstructor-scroll-block">
            <li><ConstructorItem item={ingredientsList[1]} moveable="true"/></li>
            <li><ConstructorItem item={ingredientsList[2]} moveable="true"/></li>
            <li><ConstructorItem item={ingredientsList[3]} moveable="true" isLocked="true"/></li>
            <li><ConstructorItem item={ingredientsList[4]} moveable="true"/></li>
            <li><ConstructorItem item={ingredientsList[6]} moveable="true"/></li>
            <li><ConstructorItem item={ingredientsList[7]} moveable="true"/></li>
            <li><ConstructorItem item={ingredientsList[8]} moveable="true"/></li>
            <li><ConstructorItem item={ingredientsList[9]} moveable="true"/></li>
            <li><ConstructorItem item={ingredientsList[10]} moveable="true"/></li>
            <li><ConstructorItem item={ingredientsList[11]} moveable="true"/></li>
         </ul>
         <ConstructorItem item={ingredientsList[array_size]} isLocked="true" type="bottom"/>
         <ConstructorFooter amount={550}/>
      </div>
   )
}

BurgerConstructor.propTypes = {
  ingredientsList: IngredientsPropsList
};

export default BurgerConstructor;
