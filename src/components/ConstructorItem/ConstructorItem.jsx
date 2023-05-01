
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

function ConstructorItem({item,moveable,type,isLocked,position}) {
   let name;

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
         <p>{position}</p>
      </div>
   )
}

ConstructorItem.propTypes = {
   item: PropTypes.shape({
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
      }).isRequired,
   moveable: PropTypes.bool,
   type: PropTypes.string,
   isLocked: PropTypes.bool,
   position: PropTypes.string
};

export default ConstructorItem;
