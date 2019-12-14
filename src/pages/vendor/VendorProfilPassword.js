import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostData} from '../../services/PostData';
import VendorHeader from '../../components/VendorHeader';
import VendorFooter from '../../components/VendorFooter';
import CompGantiPassword from '../../components/CompGantiPassword';
import 'url-search-params-polyfill';

class VendorProfilPassword extends React.Component {
   constructor(props) {
    super(props);
   

    this.state = {
      listdata:[],
   
      typeHeader:'back',
      linkBack:'vendor-truk',
      redirectToReferrer: false,

      appName:'Change Passsword',
      linkRedirect:'/vendor-profil',
      linkRedirectCancel:'',
      user:'vendor'

    };

  }

 




  render() {
    const {listdata,id} = this.state;

    return (

      <div class="page-content" id="page-content">
            <VendorHeader 
            name={this.state.appName} 
            typeHeader={this.state.typeHeader} 
            linkBack={this.state.linkBack} 
            />

            <CompGantiPassword user={this.state.user} />

            <VendorFooter 
            name={this.state.appName}
            />

      </div>      
     ) 
    }
  
  
}



export default VendorProfilPassword;
