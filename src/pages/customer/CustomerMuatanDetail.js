import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostDataCustomer} from '../../services/PostDataCustomer';
import CustomerHeader from '../../components/CustomerHeader';
import CustomerFooter from '../../components/CustomerFooter';
import CompMuatanDetail from '../../components/CompMuatanDetail';
import 'url-search-params-polyfill';

class CustomerMuatanDetail extends React.Component {
   constructor(props) {
    super(props);
    var search = new URLSearchParams(window.location.search);
    var id = search.get("id");
    let customer_id=sessionStorage.getItem('customer_id');

    this.state = {
      listdata:[],
      muatan_id:id,
      typeHeader:'back',
      linkBack:'customer-muatan',
      customer_id:customer_id,
      redirectToReferrer: false,

      linkRedirect:'/customer-muatan-detail?id=',
      linkRedirectCancel:'/customer-muatan-detail?id='
    };


  }

  componentDidMount() {
    PostDataCustomer('muatan',{'muatan_id':this.state.muatan_id,'customer_id':this.state.customer_id})
      .then((result) => {
        var listdata=[];
        listdata['muatan_id']=result[0]['muatan_id'];
        listdata['asal']=result[0]['asal'];
        listdata['asal_alamat']=result[0]['asal_alamat'];
        listdata['tujuan']=result[0]['tujuan'];
        listdata['tujuan_alamat']=result[0]['tujuan_alamat'];
        listdata['tarif']=result[0]['tarif'];
        listdata['deskripsi']=result[0]['deskripsi'];
        listdata['add_date']=result[0]['add_date'];
        listdata['nama_perusahaan']=result[0]['nama_perusahaan'];
        

        this.setState({listdata: listdata});

      },
      (error) => {
          this.setState({ error });
      }
      );
  }


 
  render() {
    const {listdata,id} = this.state;

    

    return (
      <div class="page-content" id="page-content">
            <CustomerHeader 
            name={this.state.appName} 
            typeHeader={this.state.typeHeader} 
            linkBack={this.state.linkBack} 
            />

            <CustomerFooter 
            name={this.state.appName}
            />
            
           <CompMuatanDetail 
           listdata={this.state.listdata} 
           linkRedirect={this.state.linkRedirect}  
           linkRedirectCancel={this.state.linkRedirectCancel}  
           />
                
              


    </div>
    )

  
  }
}



export default CustomerMuatanDetail;
