import React,{ Component } from "react";
import {NavLink,Redirect} from "react-router-dom";
import {PostDataCustomer} from '../../services/PostDataCustomer';
import CompCustFormRegister from '../../components/customer/CompCustFormRegister';

class CustomerLogin extends Component {

  constructor(props){

    super(props);
        this.state={
            firstname:'',
            lastname:'',
            email:'',
            password:''
        }

        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
  } 

  componentDidMount(){

  }  

  onChange([input_name],input_value){
    this.setState({[input_name]:input_value});
  }  

  onSubmit(){
    alert(this.state.password);
  }



  render() {

    const linkSignIn='/customer-login';
    const content=<CompCustFormRegister 
                    onChange={this.onChange} 
                    onSubmit={this.onSubmit} 
                    label={'Sign In Cutomer'} 
                    linkSignIn={linkSignIn}/>
    return (
            <div class="page-content" id="page-content">
                {content}
            </div>
    );
  }
}



export default CustomerLogin;
