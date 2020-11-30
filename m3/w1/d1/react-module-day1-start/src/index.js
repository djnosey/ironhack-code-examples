// src/index.js - Used to Inject React App to the DOM

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render( 
  <App/>, 
  document.getElementById('root') 
);