import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostDataCustomer} from '../../services/PostDataCustomer';
import Logo from '../../components/assets/images/logoelogs.png';



class CustomerForgot extends Component {

  constructor(props){

    super(props);

        this.state={
            email:'',
            password:'',
            redirectToReferrer: false,
        }
        this.login=this.login.bind(this);
        this.onChange=this.onChange.bind(this);
  } 

login() {
if(this.state.email && this.state.password){
    PostDataCustomer('login',this.state).then((result) => {
        let responseJson = result;
        if(responseJson.userData){

            sessionStorage.setItem('userData',JSON.stringify(responseJson));
            let data = JSON.parse(sessionStorage.getItem("userData"));
            let ses_email_customer=data.userData.email;
            let customer_id=data.userData.customer_id;
            sessionStorage.setItem('ses_email_customer',ses_email_customer);
            sessionStorage.setItem('customer_id',customer_id);

            this.setState({redirectToReferrer: true});
        }
        });
    }
}

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
    }




  render() {

    if (this.state.redirectToReferrer || sessionStorage.getItem('userData')){
     return (<Redirect to={'/customer-muat'}/>)
    }


    
    return (
            <div class="page-content" id="page-content">
                            <div class="content top-50">
                                <h1 class="center-text bolder font-33">Vendor</h1>
                                <h6 class="center-text thiner font-15 bottom-20">Forgot</h6>
                            </div>
                            {/* <div class="content center-text">
                               <img src={Logo} width="200" height="auto" class="center-text" />
                            </div> */}

                             <div class="content-box  round-small shadow-large left-40 right-40">
                                <div class="content top-0 bottom-20">
                                   
                                    <div class="input-style has-icon input-style-1 input-required">
                                        <i class="input-icon fa fa-at font-11"></i>
                                        <span class="input-style-1-inactive">email</span>
                                        <em>(required)</em>
                                        <input type="text" name="email" placeholder="email" onChange={this.onChange} required />
                                    </div>
                                    
                                    <div class="clear"></div>
                       
                                     <div class="form-button">
                                        <input onClick={this.login} class="button bg-highlight button-m button-full round-small bottom-0 top-30 shadow-huge" type="submit" value="SUBMIT" />
                                    </div>
                                    
                                    <div class="one-half">
                                        <NavLink to="/vendor-login" class="text-left font-11 color-theme opacity-50">Login account</NavLink>
                                    </div>
                                    <div class="one-half last-column">
                                        <NavLink to="/vendor-register" class="text-right font-11 color-theme opacity-50">Create Account</NavLink>

                                    </div>
                                    <div class="clear"></div>
                                
                                </div>
                            </div>    
            </div>



       
    );
  }
}



export default CustomerForgot;
