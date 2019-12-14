import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostData} from '../../services/PostData';
import VendorHeader from '../../components/VendorHeader';
import VendorFooter from '../../components/VendorFooter';
import CompProfile from '../../components/CompProfile';




class VendorProfil extends React.Component {

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
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/'}/>)
    }
    return (
      
         
      <div class="page-content" id="page-content">
            <VendorHeader name={this.state.appName}/>
            <VendorFooter name={this.state.appName}/>

            
            <CompProfile 
            linkUpdateProfile={this.state.linkUpdateProfile}
            linkGantiPassword={this.state.linkGantiPassword} 
            linkGantiPhone={this.state.linkGantiPhone} 
            />
  
    </div>
    );
  }
}



export default VendorProfil;
