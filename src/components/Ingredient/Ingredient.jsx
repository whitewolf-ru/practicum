
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientsPropsShape from './../IngredientsPropsShape/IngredientsPropsShape.jsx';
import styles from './Ingredient.module.css';

function Ingredient({ingredient}) {

   // Проверка счётчика на разных элементах
   const counter = (ingredient.price>300) ?
      () => <Counter count={1} size="default" className={styles.counter}/> :
      () => <div/>

   return (
      <div className={`${styles.ingredient_container} text text_type_main-small`}>
            { counter() }
         <img src={ingredient.image} style={{ width: "200px" }} alt="Ингредиент"/>
         <div className="text text_type_main-medium">{ingredient.price} <CurrencyIcon type="primary"/></div>
         <div className="text text_type_main-small"> {ingredient.name} </div>
      </div>
   )
}

Ingredient.propTypes = {
  ingredient: IngredientsPropsShape
};

export default Ingredient;
