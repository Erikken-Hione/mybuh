import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import  allReducer  from './redux/reducers';
import { composeWithDevTools} from 'redux-devtools-extension';

//store redux
let store = createStore(allReducer, composeWithDevTools());


ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
