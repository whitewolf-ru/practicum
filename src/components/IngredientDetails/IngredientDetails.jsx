
import React from "react";
import IngredientsPropsShape from './../IngredientsPropsShape/IngredientsPropsShape.jsx';
import styles from "./IngredientDetails.module.css";

const IngredientDetails = ({ ingredient }) => {
   return (
      <div className="window-message text text_type_main-default">
         <img src={ingredient?.image_large} alt="ingredient?.name" />
         <p className="text text_type_main-large">{ingredient?.name}</p>

         <center>
            <table className={`${styles.ingredient} text_color_inactive`}>
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

IngredientDetails.propTypes = {
   ingredient: IngredientsPropsShape
};

export default IngredientDetails;
