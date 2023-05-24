
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import IngredientsPropsShape from './../IngredientsPropsShape/IngredientsPropsShape.jsx';
import styles from './ConstructorItem.module.css';
import { ITEMS_SWAP } from '../../services/actions/constructorActions.js';

function ConstructorItem({ item, itemIndex, moveable, type, isLocked, position, handleClose }) {
   let name;

   const dispatch = useDispatch();

   switch (type) {
      case 'top': name = `${item.name} (верх)`
         break;
      case 'bottom': name = `${item.name} (низ)`
         break;
      default:
         name = item.name;
         break;
   }

   const unique_id = Math.random() * 2e+10;

   // Прицепляем к элементу уникальный идентификатор, чтобы было, что потом удалять. Если в конструктор попадают одинаковые ингредиенты, то у них должны быть разные unique_id.
   item.uniqueId = unique_id;

   const [, dropTarget] = useDrop({
      accept: "constructorItem",
      collect: monitor => ({
         isHover: monitor.isOver()
      }),
      drop(item) {
         dispatch({ type: ITEMS_SWAP, itemSource: itemIndex, itemTarget: item.itemIndex });
      }
   })

   const [, ref] = useDrag({
      type: "constructorItem",
      item: { itemIndex },
      collect: monitor => ({
         opacity: monitor.isDragging() ? 0.9 : 1
      })
   });

   return (
      <span className={styles.element_container}
         ref={
            (e) => { ref(e); dropTarget(e); }
         }
      >
         <div className={styles.mover}>
            {moveable ? <DragIcon type="primary" /> : <span> &nbsp; </span>}
         </div>

         <ConstructorElement
            className="text text_type_main-small ml-50"
            style={{ display: "inline-block" }}
            isLocked={isLocked}
            type={type}
            text={name}
            price={item.price}
            thumbnail={item.image}
            item_id={item._id}
            unique_id={unique_id}
            handleClose={() => handleClose(unique_id, item._id)}
         />
      </span>
   )
}

ConstructorItem.propTypes = {
   item: IngredientsPropsShape,
   moveable: PropTypes.bool,
   type: PropTypes.string,
   isLocked: PropTypes.bool,
   position: PropTypes.string,
   handleClose: PropTypes.func
};

export default ConstructorItem;
