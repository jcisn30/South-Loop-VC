import React, { Component } from 'react';
import Media from "react-media";
import './Carousel.scss';

class Carousel extends Component {
    render() {
    
   return (
<Media query="(max-width: 736px)">
{matches =>
            matches ? (
            <div class="jumbotron" id="mobileCarouselPic">
 
 </div>

) : (
 <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
 <div className="carousel-caption">
        <h5 id="businessTile">
SOUTH LOOP VETERINARY CLINIC, P.C.</h5>
<p id="businessStatement">Where our compassionate, professional team is here seven days a week to provide progressive, state-of-the-art veterinary medicine for animals and their families. Join us and share in our passion for quality animal healthcare and exceptional service.</p>
      </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="horsePic.jpg"  height="500px" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="dogPic.jpg" height="500px" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="cattlePic.jpg" height="500px" alt="Third slide"/>
    </div>
  </div>
  
</div>
)
}
</Media>

 );
    }
}

export default Carousel;