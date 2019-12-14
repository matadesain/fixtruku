import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostData} from '../../services/PostData';
import VendorHeader from '../../components/VendorHeader';
import VendorFooter from '../../components/VendorFooter';
import CompLinkList from '../../components/CompLinkList';
import CompAddButton from '../../components/CompAddButton';



class VendorTruk extends React.Component {

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
      appName:'Truk',
      linkRedirect:'/customer-muatan-detail?id=',
      linkRedirectCancel:'/customer-muatan-detail?id=',
      linkAddButton:'/vendor-truk-add-edit?id=0',
      icon:'truk'
    };
  }

  componentDidMount() {

    PostData('vendor_truk',{'vendor_id':this.state.vendor_id})
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
      return (<Redirect to={'/vendor-truk-add-edit?id='+this.state.dataID}/>)
    }

   
    return (
      <div class="page-content" id="page-content">
            <VendorHeader 
            name={this.state.appName} 
            typeHeader={this.state.typeHeader} 
            linkBack={this.state.linkBack} 
            />
            <VendorFooter />

            <CompAddButton 
            linkAddButton={this.state.linkAddButton} 
            />
            <VendorFooter />
            
            <div class="content top-80"></div>
            {listdata.map(data => (
            <div onClick={(e) => this.handleClick(data.vendor_truk_id,e)}>  
              <CompLinkList  title={data.no_polisi} deskripsi={data.stnk_masa} icon={this.state.icon}/>
            </div>  
            ))}
    </div>
    )

  
  }
}



export default VendorTruk;
