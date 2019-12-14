import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostData} from '../../services/PostData';
import VendorHeader from '../../components/VendorHeader';
import VendorFooter from '../../components/VendorFooter';
import CompWarning from '../../components/CompWarning';
import CompPenawaranList from '../../components/CompPenawaranList';
import 'url-search-params-polyfill';



class VendorPenawaran extends React.Component {

   constructor(props) {
    super(props);
    var search = new URLSearchParams(window.location.search);
    var id = search.get("id");
    let vendor_id=sessionStorage.getItem('vendor_id');

    this.state = {
      listdata:[],
      
      dataID:'',
      id:'',
      vendor_id:vendor_id,

      appName:'Penawaran',
      linkRedirect:'/vendor-muatan-detail?id='
      
    };
  }

  componentDidMount() {

    PostData('muatan_order',{'muatan_order_id':'','vendor_id':this.state.vendor_id})
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
            <VendorHeader name={this.state.appName}/>
            <VendorFooter />
            {
                !listdata.length ?
                (
                  <CompWarning />
                )
                : 
                <CompPenawaranList listdata={this.state.listdata} linkRedirect={this.state.linkRedirect} />
            }
      </div>
    )

 
  }
}



export default VendorPenawaran;
