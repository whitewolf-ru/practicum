import React from 'react';
import './App.css';
import AppHeader from './../AppHeader/AppHeader.jsx';
import ingredientsLoad from './../../utils/burger-api.js';
import BurgerIngredients from './../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from './../BurgerConstructor/BurgerConstructor.jsx';
import { ingredientsContext } from '../../utils/ingredientsContext.js';
import { constructorContext } from '../../utils/constructorContext.js';

function App() {

   const [state, setState] = React.useState({ 
       ingredients: [],
       error: false,
       loading: true
     })

   React.useEffect(() => { ingredientsLoad().then((result) => { setState({ ingredients: result, error: false, loading: false }) }) }, [])

   const priceTotal = { amount: 0 };

   // Подразумевается, что булка передана только одна, поэтому берём первую попашуюся в полученном списке.
   // А всё остальное - не булки!
   const constructorIngredients = {
      bun: state.ingredients.filter((item) => item.type === 'bun')[0],
      list: state.ingredients.filter((item) => item.type !== 'bun')
   };

   console.log(constructorIngredients);

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
          <div className="container">
             {!state.loading && !state.error && state.ingredients.length>0 &&
                <>
                   <ingredientsContext.Provider value={state.ingredients}>
                     <BurgerIngredients ingredientsList={state.ingredients}/>
                   </ingredientsContext.Provider>
                   <constructorContext.Provider value={constructorIngredients}>
                     <BurgerConstructor/>
                   </constructorContext.Provider>
                </>
             }
          </div>
          <div></div>
        </div>
      </>
   );
}

export default App;
