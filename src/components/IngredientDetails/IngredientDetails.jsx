
import React from "react";
import { useLocation, Link } from 'react-router-dom';
import IngredientsPropsShape from './../IngredientsPropsShape/IngredientsPropsShape.jsx';
import styles from "./IngredientDetails.module.css";

const IngredientDetails = ({ ingredient }) => {

console.log("ingredient",ingredient);

   return (
      <div className="window-message text text_type_main-default">
         <img src={ingredient?.image_large} alt="alt" />
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
   
   //const location = useLocation();
   //console.log("ingredient", ingredient);

   //return (
   //   <Link
   //      key={ingredient._id}
   //      to={{
   //         // Тут мы формируем динамический путь для нашего ингредиента
   //         // а также сохраняем в свойство background роут, на котором была открыта наша модалка.
   //         pathname: `/ingredient/:${ingredient._id}`,
   //         state: { background: location },
   //      }}
   //      className={styles.link}
   //   >
   //      хрень
   //   </Link>
//
   //)


}



IngredientDetails.propTypes = {
   ingredient: IngredientsPropsShape
};

export default IngredientDetails;
