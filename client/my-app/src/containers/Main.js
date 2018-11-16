import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage.js";


const Main = () => {
     return (
        <div className="main">
          <Switch>
             <Route exact path="/" component={Homepage} />
             
            
    
</Switch>
        </div>
        );
    };

export default withRouter(connect(null)(Main));