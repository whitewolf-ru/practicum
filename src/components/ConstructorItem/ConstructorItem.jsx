
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import IngredientsPropsShape from './../IngredientsPropsShape/IngredientsPropsShape.jsx';

function ConstructorItem({item,moveable,type,isLocked,position}) {
   let name;

   if (!item) return;

   switch (type) {
     case 'top': name = `${item.name} (верх)`
       break;
     case 'bottom': name = `${item.name} (низ)`
       break;
     default:
       name = item.name;
       break;
   }         

   return (
      <div>
      {  moveable ?
         <DragIcon type="primary"/>
         :
         <li
            style={{ display: "inline-block", width: 10 }}
         ></li>
         }

         <ConstructorElement
            className="text text_type_main-small ml-50"
            isLocked={isLocked}
            type={type}
            text={name}
            price={item.price}
            thumbnail={item.image}
         />
      </div>
   )
}

ConstructorItem.propTypes = {
   item: IngredientsPropsShape,
   moveable: PropTypes.bool,
   type: PropTypes.string,
   isLocked: PropTypes.bool,
   position: PropTypes.string
};

export default ConstructorItem;
