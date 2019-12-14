import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";

class CompWarning extends Component {

   

  render() {

       return (
        <div class="content-boxed top-80 content-boxed-full">
          <div class="content bottom-0">
              <h1 class="center-text top-30"><i class="fa fa-3x fa-times color-red2-dark"></i></h1>
              <h1 class="center-text uppercase ultrabold top-30">Data Kosong</h1>
              <p class="boxed-text-large">
                  Data tidak tersedia
              </p>
          </div>
        </div>          
      );



    }
  
}

export default CompWarning;