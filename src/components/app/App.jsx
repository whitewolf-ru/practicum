import React from 'react';
import './App.css';
import AppHeader from './../AppHeader/AppHeader.jsx';
import ingredientsLoad from './../../utils/burger-api.js';
import BurgerIngredients from './../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from './../BurgerConstructor/BurgerConstructor.jsx';
import { IngredientsContext } from '../../utils/ingredientsContext.js';
import { ConstructorContext } from '../../utils/constructorContext.js';

function App() {

   const [state, setState] = React.useState({ 
       ingredients: [],
       error: false,
       loading: true
     })

   React.useEffect(() => {
      ingredientsLoad()
      .then((result) => { setState({ ingredients: result, error: false, loading: false }) })
      .catch(function(error) {  
         console.log("А так всё хорошо начиналось...");  
      });
   }, [])

   // Подразумевается, что булка передана только одна, поэтому берём первую попашуюся в полученном списке.
   // А всё остальное - не булки!
   const constructorIngredients = {
      bun: state.ingredients.filter((item) => item.type === 'bun')[0],
      list: state.ingredients.filter((item) => item.type !== 'bun')
   };

   // А теперь рандомно повыкидываем из списка всякое, чтобы проверять общую стоимость бутерброда
   const random = () => { return Math.floor(Math.random() * (constructorIngredients.list.length + 1)) }
   for (let i=0;i<=random();i++) { constructorIngredients.list.splice(random(), 1) }

   return (
      <>
        <div className="App">
          <div className="header-section"></div>
          <div className="header-section"> <AppHeader/> </div>
          <div className="header-section"></div>
          <div className="container-title text text_type_main-medium"> <p className="app-title"> Соберите бургер </p> </div>
          <div></div>
          <div></div>
          <div>
           {state.loading && <h1>Загрузка...</h1> }
           {state.error && "Произошла чудовищная ошибка!" }
           {
             !state.loading && !state.error && state.ingredients.length &&
                <></>
           }
          </div>
          <main className="container">
             {!state.loading && !state.error && state.ingredients.length>0 &&
                <>
                   <IngredientsContext.Provider value={state.ingredients}>
                     <BurgerIngredients/>
                   </IngredientsContext.Provider>
                   <ConstructorContext.Provider value={constructorIngredients}>
                     <BurgerConstructor/>
                   </ConstructorContext.Provider>
                </>
             }
          </main>
          <div></div>
        </div>
      </>
   );
}

export default App;
