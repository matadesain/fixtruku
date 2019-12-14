import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";

class ConfirmPart extends Component {

  render() {
  

    return (
      
      <div id="menu-confirm" class="menu menu-box-bottom menu-box-detached round-medium" data-menu-height="200" data-menu-effect="menu-over">
              <h1 class="center-text uppercase ultrabold top-20">Are you sure?</h1>
              <p class="boxed-text-large">
                  You can even use these boxes for confirmations.
                  
              </p>
              <div class="content left-50 right-50">
                  <div class="one-half">
                      <a href="#" class="close-menu button button-center-large button-s shadow-large button-round-small bg-green1-dark">Accept</a>
                  </div>
                  <div class="one-half last-column">
                      <a href="#" class="close-menu button button-center-large button-s shadow-large button-round-small bg-red1-dark">REJECT</a>
                  </div>
                  <div class="clear"></div>
              </div>
          </div> 


      
    );
  }
}

export default ConfirmPart;