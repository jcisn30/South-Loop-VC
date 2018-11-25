import React, { Component } from 'react';
import './AboutHomePage.scss';


class AboutHomePage extends Component {
    render() {
        
        const what_were_about = "see what we are all about";
        const what_were_about_cap = what_were_about.toUpperCase();
        
        const aboutPara = "Our website was designed to be a valuable resource for pet owners like you. You can request appointments, learn about our expert veterinary team, request a refill on your pet’s prescription, and even access your pet’s medical records. Interested in volunteering or donating to local shelters? We've partnered with shelters in the area to provide much-needed medical care to animals in need of loving homes. Find out more about what we do in our community and how you can help. If you have any questions for us or would like to schedule an appointment for your four-legged family member, we invite you to call us at (308) 452-4409."
       
   return ( 
       <div className="jumbotron" id="aboutPic">
        <div id="aboutSecOne">
            <h4 id="aboutHeader">{what_were_about_cap}</h4>
                <p id="aboutPara">{aboutPara}</p>
        </div>
       </div>
       );
    }
}

export default AboutHomePage;