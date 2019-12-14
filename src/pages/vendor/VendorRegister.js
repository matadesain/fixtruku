import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostData} from '../../services/PostData';
import Logo from '../../components/assets/images/logoelogs.png';



class CustomerRegister extends Component {

  constructor(props){

    super(props);

        this.state={
            email:'',
            password:'',
            phone:'',
            redirectToReferrer: false
        }
        this.login=this.login.bind(this);
        this.onChange=this.onChange.bind(this);
  } 

login() {
if(this.state.email && this.state.password && this.state.phone){
    PostData('createvendor',this.state).then((result) => {
        let responseJson = result;
        if(responseJson.userData){
            sessionStorage.setItem('userData',JSON.stringify(responseJson));
            let data = JSON.parse(sessionStorage.getItem("userData"));
            let ses_email=data.userData.email;
            let vendor_id=data.userData.vendor_id;
            sessionStorage.setItem('ses_email',ses_email);
            sessionStorage.setItem('vendor_id',vendor_id);

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
     return (<Redirect to={'/vendor-muatan'}/>)
    }

    return (
 
        

            <div class="page-content" id="page-content">
                            <div class="content top-50">
                                <h1 class="center-text bolder font-33">Vendor</h1>
                                <h6 class="center-text thiner font-15 bottom-20">Register</h6>
                            </div>
                            {/* <div class="content center-text">
                               <img src={Logo} width="200" height="auto" class="center-text" />
                            </div> */}

                             <div class="content-box  round-small shadow-large left-40 right-40">
                                <div class="content top-0 bottom-20">
                                   <div class="input-style  has-icon input-style-1 input-required">
                                    <i class="input-icon fa fa-phone font-11"></i>
                                    <span>Phone</span>
                                    <em>(required)</em>
                                    <input type="text" name="phone" placeholder="Phone"  required onChange={this.onChange} />
                                    </div>
                                    <div class="input-style has-icon input-style-1 input-required">
                                        <i class="input-icon fa fa-at font-11"></i>
                                        <span class="input-style-1-inactive">email</span>
                                        <em>(required)</em>
                                        <input type="text" name="email" placeholder="email" onChange={this.onChange} required />
                                    </div>
                                    <div class="input-style has-icon input-style-1 input-required">
                                        <i class="input-icon fa fa-lock font-11"></i>
                                        <span class="input-style-1-inactive">Password</span>
                                        <em>(required)</em>
                                        <input type="password" name="password" placeholder="Password" onChange={this.onChange} required />
                                    </div>

                                    <NavLink to="/vendor-login" class="opacity-50 text-center font-11 top-30">Already Registered? Sign In here</NavLink>

                                     <div class="form-button">
                                        <input onClick={this.login} class="button bg-highlight button-m button-full round-small bottom-0 top-30 shadow-huge" type="submit" value="SUBMIT" />
                                    </div>
                                    
                                
                                </div>
                            </div>    
            </div>



       
    );
  }
}



export default CustomerRegister;
