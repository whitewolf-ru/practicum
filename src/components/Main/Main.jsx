import React from "react";
import { useSelector } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import styles from "./Main.module.css";
import styles_global from "./../../styles.module.css";
import BurgerIngredients from "./../BurgerIngredients/BurgerIngredients.jsx";
import BurgerConstructor from "./../BurgerConstructor/BurgerConstructor.jsx";

export default function Main() {

   const { ingredients, loadRequest, loadFailed } = useSelector(state => state.ingredientsItems);

   console.log("%cMAIN","color:blue");
   const list = ingredients.list ? ingredients.list : [];

   return (
      <>
         <div className={`${styles_global.page_container} text_type_main-medium ${styles.title}`}> Соберите бургер </div>
         <main className={styles_global.page_container} >
            {loadRequest && <h1>Загрузка...</h1>}
            {loadFailed && "Произошла чудовищная ошибка!"}
            {!loadRequest && !loadFailed && list.length &&
               <DndProvider backend={HTML5Backend}>
                  <BurgerIngredients />
                  <BurgerConstructor />
               </DndProvider>
            }
         </main>
      </>
   );
}
