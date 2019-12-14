import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostData} from '../services/PostData'


class Home extends Component {

  constructor(props){

    super(props);

        this.state={
            email:'',
            password:'',
            redirectToReferrer: false
        }
        this.login=this.login.bind(this);
        this.onChange=this.onChange.bind(this);
        //localStorage.removeItem("userData"); 
  } 

  //login() {

//PostData('login',this.state).then((result) => {
//let responseJson = result;
//console(responseJson);
// if(responseJson.userData){
// sessionStorage.setItem('userData',JSON.stringify(responseJson));
// this.setState({redirectToReferrer: true});
// }
//});


    // let apiUrl;
    // apiUrl = 'http://eurekalogistics.co.id/mp/api/transporter/terima';

    // const myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');

    // const options = {
    //   method: 'POST',
    //   body: JSON.stringify(this.state),
    //   myHeaders
    // };

    // fetch(apiUrl, options)
    //   .then(res => res.json())
    //   .then(result => {
    //       let response=result;
    //       console.log(response);
    //   },
    //   (error) => {
    //     this.setState({ error });
    //   }
    // )
//}

login() {
if(this.state.email && this.state.password){
    PostData('login',this.state).then((result) => {
        let responseJson = result;
        if(responseJson.userData){
            sessionStorage.setItem('userData',JSON.stringify(responseJson));
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
     return (<Redirect to={'/muatan'}/>)
    }

    return (
<div class="page-content" id="page-content">
                            <h1 class="center-text bolder font-33 bottom-0">TRUKU - TRANSPORTER</h1>
                            <h6 class="center-text thiner font-15 bottom-20">Login</h6>
                            <div class="content-boxed left-40 right-40">
                                <div class="content top-10 bottom-20">
                                    <p class="color-white center-text opacity-80 bottom-0">
                                    Masukkan email dan Password
                                    </p>
                                    <div class="input-style has-icon input-style-1 input-required">
                                        <i class="input-icon fa fa-user font-11"></i>
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
                                    <div class="clear"></div>
                       
                                     <div class="form-button">
                                        <input onClick={this.login} class="button bg-highlight button-m button-full round-small bottom-0 top-30 shadow-huge" type="submit" value="SUBMIT" />
                                    </div>
                                    
                                    <div class="one-half">
                                    

                                    </div>
                                    <div class="one-half last-column">
                                        <NavLink to="/forgot" class="text-right font-11 color-theme opacity-50">Fogot Password</NavLink>

                                    </div>
                                    <div class="clear"></div>
                                </div>
                            </div>
            </div>



       
    );
  }
}



export default withBase(Home);
