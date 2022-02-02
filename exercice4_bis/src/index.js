import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header'
import Beverage from './components/Beverage'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faCoffee} from '@fortawesome/free-solid-svg-icons';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


ReactDOM.render(
  <React.StrictMode>
    <Beverage/>
  </React.StrictMode>,
  document.getElementById('subRoot')
);