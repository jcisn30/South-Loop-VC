import React, { Component } from 'react';
import './BusinessStatement.scss';


class BusinessStatement extends Component {
    render() {
    
   return (
       <div id="businessStatementMobile">
       
       <h3>{this.props.officialBusinessName}</h3>
       <h5>Where our compassionate, professional team is here seven days a week to provide progressive, state-of-the-art veterinary medicine for animals and their families. Join us and share in our passion for quality animal healthcare and exceptional service.</h5>
      
       </div>
        
        );
    }
}

export default BusinessStatement;