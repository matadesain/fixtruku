import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostDataCustomer} from '../../services/PostDataCustomer';
import CustomerHeader from '../../components/CustomerHeader';
import CustomerFooter from '../../components/CustomerFooter';
import CompWarning from '../../components/CompWarning';
import CompMuatanList from '../../components/CompMuatanList';


class CustomerMuatan extends React.Component {

   constructor(props) {
    super(props);
    let customer_id=sessionStorage.getItem('customer_id');

    this.state = {
      listdata:[],
      error:'',

      customer_id:customer_id,
      appName:'Muatan',
      linkRedirect:'/customer-muatan-detail?id='
    };
  }

  componentDidMount() {

    PostDataCustomer('muatan',{'customer_id':this.state.customer_id,'muatan_id':''})
      .then((result) => {
        this.setState({listdata: result});
      },
      (error) => {
          this.setState({ error });
      }

      );
    }


 
  render() {
    const {error,listdata} = this.state;
   
    return (
      <div class="page-content" id="page-content">
            <CustomerHeader name={this.state.appName}/>
            <CustomerFooter />
            <div class="content top-80"></div>
            {
                !listdata.length ?
                (
                  <CompWarning />
                )
                : 
                <CompMuatanList listdata={this.state.listdata} linkRedirect={this.state.linkRedirect} />
            }
      </div>
    )

  

  
  }
}



export default CustomerMuatan;
