import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";

class VendorHeader extends Component {

   constructor(props) {
    super(props);
     this.state = {
      };
    };
  

  render() {
      
        var icon=this.props.icon;


        if(icon=='truk'){
            return (
              <div class="content-boxed top-20 content-boxed-full custom-content-boxed">
                <div class="content bottom-0">
                    <div class="link-list link-list-2">
                        <a>
                            <i class="fa fa-truck bg-green1-dark round-tiny"></i>
                            <span>{this.props.title}</span>
                            <strong>{this.props.deskripsi}</strong>
                            <i class="fa fa-angle-right"></i>
                        </a>      
                    </div>
                </div>
              </div> 
            );
        }else{
          return (
              <div class="content-boxed top-20 content-boxed-full custom-content-boxed">
                <div class="content bottom-0">
                    <div class="link-list link-list-2">
                        <a>
                            <i class="fa fa-bell bg-green1-dark round-tiny"></i>
                            <span>{this.props.title}</span>
                            <strong>{this.props.deskripsi}</strong>
                            <i class="fa fa-angle-right"></i>
                        </a>      
                    </div>
                </div>
              </div> 
            );


        }
  }
}

export default VendorHeader;