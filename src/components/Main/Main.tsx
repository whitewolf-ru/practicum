import React from "react";
//import { useSelector } from "react-redux";
import { useSelector } from "../../hooks/index";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import styles from "./Main.module.css";
import styles_global from "./../../styles.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

export default function Main() {

   const { items, loadRequest, loadFailed } = useSelector(store => store.ingredientsItems);

   return (
      <>
         <div className={`${styles_global.page_container} text_type_main-medium ${styles.title}`}> Соберите бургер </div>
         <main className={styles_global.page_container} >
            {loadRequest && <h1>Загрузка...</h1>}
            {loadFailed && "Произошла чудовищная ошибка!"}
            {
               !loadRequest && !loadFailed && items &&
               <DndProvider backend={HTML5Backend}>
                  <BurgerIngredients />
                  <BurgerConstructor />
               </DndProvider>
            }
            {
               !loadRequest && !loadFailed && !items &&
               "Загрузилось, но как-то странно"
            }
         </main>
      </>
   );
}
