
import React from "react";

import styles from "./IngredientDetails.module.css";
import { Tingredient } from '../../utils/types'

const IngredientDetails = ({ingredient}: {ingredient: Tingredient}) => {
   return (
      <div className="window-message text text_type_main-default">
         <img src={ingredient?.image_large} alt="ingredient?.name" />
         <p className="text text_type_main-large">{ingredient?.name}</p>

         <center>
            <table className={`${styles.item} text_color_inactive`}>
               <tbody>
                  <tr>
                     <td> Калории, ккал </td>
                     <td> углеводы </td>
                     <td> жиры </td>
                     <td> белки </td>
                  </tr>
                  <tr>
                     <td> {ingredient?.calories} </td>
                     <td> {ingredient?.carbohydrates} </td>
                     <td> {ingredient?.fat} </td>
                     <td> {ingredient?.proteins} </td>
                  </tr>
               </tbody>
            </table>
         </center>

      </div>
   )
}

export default IngredientDetails;
