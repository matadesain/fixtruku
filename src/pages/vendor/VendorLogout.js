import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostData} from '../../services/PostData'


class VendorLogout extends Component {
     constructor(props){
          super(props);
              this.state={
                  redirectToReferrer: false,
              }
              this.removeSession=this.removeSession.bind(this);
     }
  
removeSession(){
     sessionStorage.removeItem("ses_email"); 
     sessionStorage.removeItem("vendor_id");
     sessionStorage.removeItem("user");
     this.setState({redirectToReferrer:true});
}

render(){
     if (this.state.redirectToReferrer){
          return (<Redirect to={'/vendor-login'}/>)
     }     

}


}
export default VendorLogout;
