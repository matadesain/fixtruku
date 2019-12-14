import React,{ Component } from "react";
import {NavLink,Redirect} from "react-router-dom";
import {PostDataCustomer} from '../../services/PostDataCustomer';
import CompCustFormLogin from '../../components/customer/CompCustFormLogin';


class CustomerLogin extends Component {

  constructor(props){

    super(props);
        this.state={
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
    // alert('asd');
    PostDataCustomer('login',this.state)
    .then((result) => {
     alert(result[0]['customer_id']);
      //  localStorage.setItem("id_guest",result[0]['id']);
      //  localStorage.setItem("nama",result[0]['nama']);

    //window.location.hash = '/redirect';
    },
    (error) => {
        this.setState({ error });
    }
    );

  }



  render() {

    const linkForgot='/customer-forgot';
    const linkSignUp='/customer-register';
    const content=<CompCustFormLogin 
                    onChange={this.onChange} 
                    onSubmit={this.onSubmit} 
                    label={'Sign In Cutomer'} 
                    linkForgot={linkForgot} 
                    linkSignUp={linkSignUp}/>
    return (
            <div class="page-content" id="page-content">
                {content}
            </div>
    );
  }
}



export default CustomerLogin;
