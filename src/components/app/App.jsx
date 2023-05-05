 
import React from 'react';
import './App.css';
import AppHeader from './../AppHeader/AppHeader.jsx';
import BurgerIngredients from './../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from './../BurgerConstructor/BurgerConstructor.jsx';

function App() {
   const DATA_URL = "https://norma.nomoreparties.space/api/ingredients";

   const [state, setState] = React.useState({ 
       ingredients: [],
       error: false,
       loading: true,
     })
   
   const ingredientsGet = async() => {
      setState({ ...state, error: false, loading: true });

      let res;

      try {
         res = await fetch(DATA_URL)
      }
      catch(err) {
         console.log("App(): ничего не вышло, загружайте тщательнее!",err)
      }

      const data = await res.json();

      if (data.data.length>0) {
         console.log("App(): данные вроде бы загружены, переключаем состояние...",state);
         setState({ingredients: data.data, error: false, loading: false });
      }
   }

   React.useEffect(() => {
      ingredientsGet();
   }, [])

   if (state.error) alert("Вот тебе и раз!");

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

     <div id="react-modals"></div>
   </>

   );
}

export default App;
