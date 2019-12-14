import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostData} from '../../services/PostData';
import VendorHeader from '../../components/VendorHeader';
import VendorFooter from '../../components/VendorFooter';
import CompMuatanDetail from '../../components/CompMuatanDetail';
import 'url-search-params-polyfill';

class VendorPenawaranDetail extends React.Component {
   constructor(props) {
    super(props);
    var search = new URLSearchParams(window.location.search);
    var id = search.get("id");
    let vendor_id=sessionStorage.getItem('vendor_id');

    this.state = {
      listdata:[],
      muatan_order_id:id,
      typeHeader:'back',
      linkBack:'vendor-penawaran',
      vendor_id:vendor_id,
      appName:'Penawaran Detail',

      linkRedirect:'/customer-muatan-detail?id=',
      linkRedirectCancel:'/customer-muatan-detail?id='
    };

  }

  componentDidMount() {
    PostData('muatan_order',{'muatan_order_id':this.state.muatan_order_id,'vendor_id':this.state.vendor_id})
      .then((result) => {
        var listdata=[];
        listdata['muatan_id']=result[0]['muatan_id'];
        listdata['muatan_order_id']=result[0]['muatan_order_id'];
        listdata['muatan_order_status_id']=result[0]['muatan_order_status_id'];
        listdata['asal']=result[0]['asal'];
        listdata['asal_alamat']=result[0]['asal_alamat'];
        listdata['tujuan']=result[0]['tujuan'];
        listdata['tujuan_alamat']=result[0]['tujuan_alamat'];
        listdata['tarif']=result[0]['tarif'];
        listdata['status']=result[0]['status'];
        listdata['deskripsi_status']=result[0]['deskripsi_status'];
        listdata['deskripsi']=result[0]['deskripsi'];
        listdata['nama_oerusahaan']=result[0]['nama_oerusahaan'];

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
            <VendorHeader 
            name={this.state.appName} 
            typeHeader={this.state.typeHeader} 
            linkBack={this.state.linkBack} 
            />

            <VendorFooter 
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



export default VendorPenawaranDetail;
