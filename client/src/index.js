import React from 'react';
// import './index.css'
import ReactDOM from 'react-dom';
import App from '../src/App.js';
import reportWebVitals from './reportWebVitals';
import {Provider} from'react-redux'
import store from './redux/store/store.js';
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
