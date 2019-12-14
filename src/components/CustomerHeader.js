import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";

class CustomerHeader extends Component {

   constructor(props) {
    super(props);
    let ses_email_customer=sessionStorage.getItem('ses_email_customer');
    this.state = {
      appName: ses_email_customer,
    };
  }

   logout(){
     sessionStorage.setItem("userData",'');
     sessionStorage.setItem("ses_email_customer",'');
     sessionStorage.clear();

   }

  render() {
    var typeHeader=this.props.typeHeader;
    var linkBack=this.props.linkBack;


    if (sessionStorage.getItem('ses_email_customer')==null){
     return (<Redirect to={'/customer-login'}/>)
    }

    
    if(typeHeader=='back'){
        return (
             <div class="header header-fixed header-logo-center demo-shadow bottom-10 custom-header">
              <NavLink to="/customer-muatan" class="back-button header-icon header-icon-1"><i class="fas fa-arrow-left"></i></NavLink>
              </div>
        );

    }else{
       return (
         <div class="header header-fixed header-logo-left demo-shadow bottom-10 custom-header">
            <NavLink to="#" class="header-title">{this.props.name}</NavLink>
            <NavLink to="#" class="header-icon header-icon-1" onClick={this.logout}><i class="fa fa-sign-out-alt"></i></NavLink>
        </div>
      );



    }
  }
}

export default CustomerHeader;