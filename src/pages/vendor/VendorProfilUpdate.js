import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostData} from '../../services/PostData';
import VendorHeader from '../../components/VendorHeader';
import VendorFooter from '../../components/VendorFooter';
import CompProfilAkun from '../../components/CompProfilAkun';




class VendorProfilUpdate extends React.Component {

   constructor(props) {
    super(props);

    this.state = {
      appName: "Profile",
      redirectToReferrer: false,
      linkUpdateProfile:'/vendor-profil-update',
      linkGantiPassword:'/vendor-profil-password',
      linkGantiPhone:'/vendor-profil-phone'
    };

  }


  render() {
   
    return (
      
         
      <div class="page-content" id="page-content">
            <VendorHeader name={this.state.appName}/>
            <VendorFooter name={this.state.appName}/>
            <CompProfilAkun />
      </div>
    );
  }
}



export default VendorProfilUpdate;
