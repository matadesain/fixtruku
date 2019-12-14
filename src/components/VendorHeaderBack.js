import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";

class VendorHeaderBack extends Component {

   constructor(props) {
    super(props);
    
    let ses_email=sessionStorage.getItem('ses_email');

    this.state = {
      appName: ses_email,
    };


  }

   logout(){
     sessionStorage.setItem("userData",'');
     sessionStorage.setItem("ses_email",'');
     sessionStorage.clear();

   }

  render() {
    if (sessionStorage.getItem('ses_email')==null){
     return (<Redirect to={'/vendor-login'}/>)
    }

    return (
      
       <div class="header header-fixed header-logo-left demo-shadow bottom-10 custom-header">
       <  NavLink to class="header-icon header-icon-1"><i class="fa fa-arrow-left"></i></NavLink>
      </div>


      
    );
  }
}

export default VendorHeaderBack;