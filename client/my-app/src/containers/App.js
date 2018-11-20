import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header.js';
import {Provider} from "react-redux";
import {configureStore} from "../store";
import {BrowserRouter as Router} from "react-router-dom";
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import Main from "./Main";
import Footer from "../components/Footer.js";


const store = configureStore();

const businessName = "South Loop Veterinary Clinic";

const App = () => (
  
  
  
  <Provider store={store}>
  
    <Router>
      <div className="container-fluid">
        <Header businessName={businessName} />
        <Main  />
        <Footer />
     </div>
    </Router>
    
  </Provider>
  );

export default App;

