import React, { Component } from 'react';
import './ServicesHomePage.scss';



class ServiceHomePage extends Component {
  
    
    render() {
          const dogStyle= {
         'width':'300px',
         'marginLeft': '5%',
         'marginBottom': '3%'    };
    
        
   return ( 
       <div id="services">
        <div className="speech-bubble">
Dr. Griffin does great work and genuinely cares for her patients!!! I am so thankful for the addition to our community. Thanks for getting us in at the drop of a hat! 
</div>
 <img src="dog2.png" style={dogStyle}/>
 <div id="serviesPara">
  <h3>Services provided at South Loop Veterinary Clinic</h3>
   <p id="servicesStatement">We offer comprehensive services for all your animals, to see them through a long, healthy life. <br/> To ensure our patients receive the care they need at every life stage, our services include:</p>
    <ul>
    <li>Wellness care & health maintenance</li>
    <li>Customized vaccination protocols</li>
    <li>Dental care</li>
    <li>Surgery</li>
    <li>Digital X-ray, ECG & in-house diagnostic laboratory testing</li>
    <li>Emergency care</li>
    </ul>
 </div>
       </div>
       
       
      
        );
    }
}

export default ServiceHomePage;