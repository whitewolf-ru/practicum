import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function ConstructorItem({item,moveable,type,isLocked}) {
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
            text={item.name}
            price={item.price}
            thumbnail={item.image}
         />
      </div>
   )
}

export default ConstructorItem;

