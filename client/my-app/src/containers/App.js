import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import {Provider} from "react-redux";
import {configureStore} from "../store";
import {BrowserRouter as Router} from "react-router-dom";
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

const store = configureStore();

const App = () => (
  <Provider store={store}>
  
    <Router>
      <div className="ui fluid container">
        <Header />
        
     </div>
    </Router>
    
  </Provider>
  );

export default App;

