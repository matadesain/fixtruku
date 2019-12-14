import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";

class VendorHeader extends Component {

   constructor(props) {
    super(props);
    let ses_email=sessionStorage.getItem('ses_email');
    this.state = {
      appName: ses_email,
    };
  }

   logout(){
     sessionStorage.setItem("vendor_id",'');
     sessionStorage.setItem("ses_email",'');
     sessionStorage.setItem("user",'');
     sessionStorage.clear();

     //sessionStorage.removeItem("test1"); 

   }

  render() {
    var typeHeader=this.props.typeHeader;
    //var linkBack=this.props.linkBack;
    var linkBack=this.props.linkBack;


    if (sessionStorage.getItem('ses_email')==null){
     return (<Redirect to={'/vendor-login'}/>)
    }
    if(typeHeader=='back'){
        return (
        <div class="header header-static header-logo-app demo-shadow bottom-10">
            <a href="#" class="header-title"><span class="color-highlight">{this.props.name}</span></a>
            <NavLink to={this.props.linkBack} class="header-icon header-icon-1"><i class="fa fa-arrow-left"></i></NavLink>
            <NavLink to="#" class="header-icon header-icon-2" onClick={this.logout}><i class="fa fa-sign-out-alt"></i></NavLink>
        </div>
          );
    }else{
       return (
        <div class="header header-fixed header-logo-left demo-shadow bottom-10">
            <a href="#" class="header-title"><span class="color-highlight">{this.props.name}</span></a>
            <NavLink to="#" class="header-icon header-icon-2" onClick={this.logout}><i class="fa fa-sign-out-alt"></i></NavLink>
        </div>
    );



    }
  }
}

export default VendorHeader;