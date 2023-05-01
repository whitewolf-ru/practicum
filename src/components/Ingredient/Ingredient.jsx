
import PropTypes from 'prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import './Ingredient.css';

function Ingredient({ingredient}) {

   // Проверка счётчика на разных элментах
   const counter = (ingredient.price>300) ?
      () => <Counter count={1} size="default"/> :
      () => <div/>

   return (
      <li className="ingredient_container order-item_item__-UI1D text text_type_main-small">
         <div style={{position: "relative"}}>
            { counter() }
         </div>
         <img src={ingredient.image} alt="Ингредиент"/>
         <div className="text text_type_main-medium">{ingredient.price} <CurrencyIcon type="primary"/></div>
         <div className="text text_type_main-small">{ingredient.name}</div>
      </li>
   )
}

Ingredient.propTypes = {
  ingredient:
     PropTypes.shape({
     _id: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
     type: PropTypes.string.isRequired,
     proteins: PropTypes.number,
     fat: PropTypes.number,
     carbohydrates: PropTypes.number,
     calories: PropTypes.number,
     price: PropTypes.number.isRequired,
     image: PropTypes.string.isRequired,
     image_mobile: PropTypes.string.isRequired,
     image_large: PropTypes.string.isRequired,
     __v: PropTypes.number
   }).isRequired
};

export default Ingredient;
