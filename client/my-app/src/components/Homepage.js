import React, { Component } from 'react';
import './Homepage.scss';
import horsePic from './images/horsePic.jpg';
import dogPic from './images/dogPic.jpg';
import cattlePic from './images/cattlePic.jpg';
import cattlePic1 from './images/cattlePic1.jpg'

import Carousel from "./Carousel";
import BusinessStatement from "./BusinessStatement";
import AboutHomePage from "./AboutHomePage";
import ServiceHomePage from "./ServicesHomePage";

class Homepage extends Component {
    render() {
        
        const officialBusinessName = "South Loop Veterinary Clinic P.C.";
        
    
   return (
       <div>
        <Carousel />
        <BusinessStatement officialBusinessName={officialBusinessName} />
        <ServiceHomePage />
        <AboutHomePage />
        </div>
        );
    }
}

export default Homepage;