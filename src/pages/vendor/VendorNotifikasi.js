import React,{ Component } from "react";

import {NavLink,Redirect} from "react-router-dom";
import {PostData} from '../../services/PostData';
import VendorHeader from '../../components/VendorHeader';
import VendorFooter from '../../components/VendorFooter';
import CompLinkList from '../../components/CompLinkList';


class VendorNotifikasi extends React.Component {

   constructor(props) {
    super(props);
    var search = new URLSearchParams(window.location.search);
    var id = search.get("id");
    let vendor_id=sessionStorage.getItem('vendor_id');

    this.state = {
      listdata:[],
      redirectToReferrer: false,
      dataID:'',
      id:'',
      vendor_id:vendor_id,
      appName:'Notifikasi',
      linkRedirect:'/customer-muatan-detail?id=',
      linkRedirectCancel:'/customer-muatan-detail?id=',
      linkAddButton:'/vendor-truk-add-edit?id=0',
      icon:''
    };
  }

  componentDidMount() {

    PostData('notifikasi',{'id':this.state.vendor_id})
      .then((result) => {
        this.setState({listdata: result});

      },
      (error) => {
          this.setState({ error });
      }


      );
    }

    
  handleClick(id='') {
    this.setState({redirectToReferrer: true});
    this.setState({dataID: id});
  }



 
  render() {
    const {error,listdata} = this.state;

    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/vendor-muatan-detail?id='+this.state.dataID}/>)
    }

   
    return (
      <div class="page-content" id="page-content">
            <VendorHeader 
            name={this.state.appName} 
            typeHeader={this.state.typeHeader} 
            linkBack={this.state.linkBack} 
            />
            <VendorFooter />

             <div class="content top-80"></div>
            {listdata.map(data => (
              <CompLinkList  title={data.tipe_notifikasi} deskripsi={data.notifikasi} icon={this.state.icon}/>
            ))}
    </div>
    )

  
  }
}



export default VendorNotifikasi;
