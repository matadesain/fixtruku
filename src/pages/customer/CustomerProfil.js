import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostDataCustomer} from '../../services/PostDataCustomer';
import CustomerHeader from '../../components/CustomerHeader';
import CustomerFooter from '../../components/CustomerFooter';
import CompProfile from '../../components/CompProfile';




class CustomerProfil extends React.Component {

   constructor(props) {
    super(props);

    this.state = {
      appName: "Profil",
      redirectToReferrer: false,
      linkUpdateProfile:'/customer-profil-update',
      linkGantiPassword:'/customer-profil-password',
      linkGantiPhone:'/customer-profil-phone'
    };

    this.logout = this.logout.bind(this);
  }

  logout(){
     sessionStorage.setItem("userData",'');
     sessionStorage.clear();
     this.setState({redirectToReferrer: true});
   }

  render() {
    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/'}/>)
    }
    return (
      
         
      <div class="page-content" id="page-content">
            <CustomerHeader name={this.state.appName}/>
            <CustomerFooter name={this.state.appName}/>

            <CompProfile 
            linkUpdateProfile={this.state.linkUpdateProfile}
            linkGantiPassword={this.state.linkGantiPassword} 
            linkGantiPhone={this.state.linkGantiPhone} 
            />
  
    </div>
    );
  }
}



export default CustomerProfil;
