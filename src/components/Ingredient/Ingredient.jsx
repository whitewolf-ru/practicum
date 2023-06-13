
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientsPropsShape from './../IngredientsPropsShape/IngredientsPropsShape.jsx';
import styles from './Ingredient.module.css';
import { useDrag } from 'react-dnd';

function Ingredient({ ingredient }) {

   const counter = (ingredient.counter) ?
      () => <Counter count={ingredient.counter} size="default" className={styles.counter} /> :
      () => <div />

   const itemId = ingredient._id;

   const [, ref] = useDrag({
      type: 'items',
      item: { itemId },
      collect: monitor => ({
         opacity: monitor.isDragging() ? 0.9 : 1
      })
   });

   return (
      <div className={`${styles.ingredient_container} text text_type_main-small`} ref={ref}>
         {counter()}
         <img src={ingredient.image} style={{ width: "200px" }} alt={ingredient.name} />
         <div className="text text_type_main-medium">{ingredient.price} <CurrencyIcon type="primary" /></div>
         <div className="text text_type_main-small"> {ingredient.name} </div>
      </div>
   )
}

Ingredient.propTypes = {
   ingredient: IngredientsPropsShape
};

export default Ingredient;
