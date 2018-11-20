import React, { Component } from 'react';
import './ServicesHomePage.scss';



class ServiceHomePage extends Component {
  
    
    render() {
          const dogStyle= {
         'width':'200px',
         'marginLeft': '5%'
    };
    
        
   return ( 
       <div id="services">
        <div className="speech-bubble">
Dr. Griffin does great work and genuinely cares for her patients!!! I am so thankful for the addition to our community. Thanks for getting us in at the drop of a hat! 
</div>
 <img src="dog2.png" style={dogStyle}/>
       </div>
       
       
      
        );
    }
}

export default ServiceHomePage;