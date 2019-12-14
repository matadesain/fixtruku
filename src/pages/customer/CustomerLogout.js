import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostDataCustomer} from '../../services/PostDataCustomer'


class CustomerLogout extends Component {

  

 

render(){
     sessionStorage.setItem('userData', false);
     return (<Redirect to={'/muatan'}/>);

}


}
export default CustomerLogout;
