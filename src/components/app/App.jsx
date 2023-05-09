import React from 'react';
import './App.css';
import AppHeader from './../AppHeader/AppHeader.jsx';
import ingredientsLoad from './../../utils/burger-api.js';
import BurgerIngredients from './../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from './../BurgerConstructor/BurgerConstructor.jsx';

function App() {

   const [state, setState] = React.useState({ 
       ingredients: [],
       error: false,
       loading: true
     })
   
   React.useEffect(() => { ingredientsLoad().then((result) => { setState({ ingredients: result, error: false, loading: false }) }) }, [])

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
             <BurgerIngredients ingredientsList={state.ingredients}/>
             <BurgerConstructor ingredientsList={state.ingredients}/>
             </>
          }
       </div>
       <div></div>
     </div>
   </>

   );
}

export default App;
