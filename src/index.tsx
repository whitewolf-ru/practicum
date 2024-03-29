import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from './services/store';
import './index.css';
import App from './components/app/App';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);

root.render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter basename={'burger'}>
            <App />
         </BrowserRouter>
      </Provider>
   </React.StrictMode>
);

reportWebVitals();
