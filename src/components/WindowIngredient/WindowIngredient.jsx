
import React from "react";
import { CloseIcon, CurrencyIcon  } from '@ya.praktikum/react-developer-burger-ui-components'

const WindowIngredient = ({ ingredient }) => {

   return (
      <div className="window-message text text_type_main-default">
         <img src={ingredient.image_large}/>
         <p className="text text_type_main-large">{ingredient.name}</p>

         <center>
         <table className="text_color_inactive" style={{ margin: "20px", textAlign: "center", width: "80%" }}>
            <tbody>
               <tr>
                  <td> Калории, ккал </td>
                  <td> углеводы </td>
                  <td> жиры </td>
                  <td> белки </td>
               </tr>
               <tr>
                  <td> {ingredient.calories} </td>
                  <td> {ingredient.carbohydrates} </td>
                  <td> {ingredient.fat} </td>
                  <td> {ingredient.proteins} </td>
               </tr>
            </tbody>
         </table>
         </center>

      </div>
   )
}

export default WindowIngredient;
