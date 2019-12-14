import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostData} from '../../services/PostData';
import CustomerHeader from '../../components/CustomerHeader';
import CustomerFooter from '../../components/CustomerFooter';
import CompProfilAkun from '../../components/CompProfilAkun';




class CustomerProfilUpdate extends React.Component {

   constructor(props) {
    super(props);

    this.state = {
      appName: "Profile",
      redirectToReferrer: false,
      linkUpdateProfile:'/customer-profil-update',
      linkGantiPassword:'/customer-profil-password',
      linkGantiPhone:'/customer-profil-phone'
    };

  }


  render() {
    
    return (
      
         
      <div class="page-content" id="page-content">
            <CustomerHeader name={this.state.appName}/>
            <CustomerFooter name={this.state.appName}/>
            <CompProfilAkun />
      </div>
    );
  }
}



export default CustomerProfilUpdate;
