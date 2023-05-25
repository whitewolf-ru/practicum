// Всякая системная шняга
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

// Крафтовые сырцы
import styles from './App.module.css';
import AppHeader from './../AppHeader/AppHeader.jsx';
import BurgerIngredients from './../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from './../BurgerConstructor/BurgerConstructor.jsx';
import { ingredientsLoad } from "../../services/actions/ingredientsActions.js";

function App() {

   // Загрузка булок
   const { ingredients, loadRequest, loadFailed } = useSelector(state => state.ingredientsItems);

   const dispatch = useDispatch();

   React.useEffect(() => {
      // Отправляем action-функцию
      dispatch(ingredientsLoad());
   }, [dispatch])

   const list = ingredients.list ? ingredients.list : [];

   return (
      <>
         <div className={styles.App}>
            <div className={styles.header_section}></div>
            <div className={styles.header_section}> <AppHeader /> </div>
            <div className={styles.header_section}></div>
            <div className={`${styles.container_title} text text_type_main-medium`}> <p className={styles.app_title}> Соберите бургер </p> </div>
            <div></div>
            <div></div>
            <div>
               {loadRequest && <h1>Загрузка...</h1>}
               {loadFailed && "Произошла чудовищная ошибка!"}
               {
                  !loadRequest && !loadFailed && list.length &&
                  <></>
               }
            </div>
            <main className={styles.container}>
               {!loadRequest && !loadFailed && list.length &&
                  <>
                     <DndProvider backend={HTML5Backend}>
                        <BurgerIngredients />
                        <BurgerConstructor />
                     </DndProvider>
                  </>
               }
            </main>
            <div></div>
         </div>
      </>
   );
}

export default App;
