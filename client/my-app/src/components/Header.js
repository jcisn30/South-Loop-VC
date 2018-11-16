import React, { Component } from 'react';
import './Header.scss';
import logo from './images/slvclogo.png';
import {connect} from "react-redux";
import $ from 'jquery'
// import {activeItem} from "../store/actions/navMenu";




class Header extends Component {
    
handleToggle = () => {
    $('.nav-item').click(function(){
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
     })
}


    
  render() {
    
   
    
    return (
      
//main navbar menu
<div className="container-fluid">
<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" onFocus={this.handleToggle}>
    <div className="container">
        <a className="navbar-brand" href="#">
            <img src="slvclogo.png" width="140" height="70" alt="Logo" />
            <p id="logoName">{this.props.businessName}</p>
       </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
       </button>

        <div className="collapse navbar-collapse flex-column align-items-end" id="navbarCollapse">
             
            <div className="navbar-nav mb-lg-0">
                <span className="navbar-text" id="address">41960 NE-2 Ravenna, Nebraska 68869, <a href="tel:+1-402-853-2628">(308) 452-4409</a></span>
                <a className="nav-link" id="specials" href="#" data-toggle="tooltip" data-placement="top" title="Click here to see special deals!" data-toggle="modal" data-target="#specialsModal">Monthly Specials</a>
            </div>
            
           

            
            <ul className="navbar-nav mt-0">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Our Team</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link" href="#" data-toggle="modal" data-target="#messageModal" data-whatever="@mdo">Contact Us</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

{/* modal for sending text message, contact us link */}

<div className="modal fade" id="messageModal" tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
            <input type="text" className="form-control" id="recipient-name" />
          </div>
          <div className="form-group">
            <label htmlFor="message-text" className="col-form-label">Message:</label>
            <textarea className="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>



{/* modal that displays monthly specials */}
<div className="modal fade" id="specialsModal" tabIndex="-1" role="dialog" aria-labelledby="specialsModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>

    );
  }
}

export default connect(null) (Header);


