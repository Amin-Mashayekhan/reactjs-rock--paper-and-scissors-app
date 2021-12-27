
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import "./styles.css";
ReactDOM.render(
  // <Router>
  <BrowserRouter>
    <App />,
  </BrowserRouter>,
  // </Router>,
  document.getElementById('root')
); 