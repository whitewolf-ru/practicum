
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientsPropsShape from './../IngredientsPropsShape/IngredientsPropsShape.jsx';

import './Ingredient.css';

function Ingredient({ingredient}) {

   // Проверка счётчика на разных элементах
   const counter = (ingredient.price>300) ?
      () => <Counter count={1} size="default"/> :
      () => <div/>

   return (
      <div className="ingredient_container order-item_item__-UI1D text text_type_main-small">
         <div style={{position: "relative"}}>
            { counter() }
         </div>
         <img src={ingredient.image} style={{ width: "200px" }} alt="Ингредиент"/>
         <div className="text text_type_main-medium">{ingredient.price} <CurrencyIcon type="primary"/></div>
         <div className="text text_type_main-small" style={{ wordWrap: "break-word"}}> {ingredient.name} </div>
      </div>
   )
}

Ingredient.propTypes = {
  ingredient: IngredientsPropsShape
};

export default Ingredient;
