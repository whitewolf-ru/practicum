
import React from "react";
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './ConstructorItem.module.css';
import { ITEMS_SWAP } from '../../services/actions/constructorActions';
import { TconstructorElement } from '../../utils/types'

function ConstructorItem(
   {
      item, itemIndex, moveable, type, isLocked, position, handleClose
   }:
      {
         item: TconstructorElement,
         itemIndex?: number,
         moveable?: boolean,
         type?: "top" | "bottom",
         isLocked?: boolean,
         position?: string,
         handleClose: Function
      }

) {
   let name: string;

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

   //const [{ isHover }, dropTarget] = useDrop({

   const [{ isHover }, dropTarget] = useDrop<TconstructorElement, void, { isHover: boolean }>({
      accept: "constructorItem",
      collect: monitor => ({
         isHover: monitor.isOver()
      }),
      drop(item: TconstructorElement) {
         dispatch({ type: ITEMS_SWAP, itemSource: itemIndex, itemTarget: item.itemIndex });
      }
   })

   const style = isHover ? { boxShadow: "inset 1px 1px 30px 1px rgba(50,50,255,0.5)" } : { boxShadow: "0px 0px #000" };

   let [, ref] = useDrag({
      type: "constructorItem",
      item: { itemIndex },
      collect: monitor => ({
         opacity: monitor.isDragging() ? 0.9 : 1
      })
   })

   return (
      <span className={styles.element_container} ref={isLocked ? null : (e) => { ref(e); dropTarget(e); }} style={style}>
         <div className={styles.mover}>
            {moveable ? <DragIcon type="primary" /> : <span> &nbsp; </span>}
         </div>
         <span className="text text_type_main-small ml-50">
            <ConstructorElement
               isLocked={isLocked}
               type={type}
               text={name}
               price={item.price}
               thumbnail={item.image}
               handleClose={() => handleClose(unique_id, item._id)}
            />
         </span>
      </span>
   )
}

export default ConstructorItem;
