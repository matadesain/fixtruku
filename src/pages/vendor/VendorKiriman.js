import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostData} from '../../services/PostData';
import VendorHeader from '../../components/VendorHeader';
import VendorFooter from '../../components/VendorFooter';
import 'url-search-params-polyfill';



class VendorKiriman extends React.Component {

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
      vendor_id:vendor_id
    };
  }

  componentDidMount() {

    PostData('muatan_kiriman',{'muatan_id':'','vendor_id':this.state.vendor_id})
      .then((result) => {
        this.setState({listdata: result});

      },
      (error) => {
          this.setState({ error });
      }


      );
    }

    
  handleClick(muatan_id='') {
    this.setState({redirectToReferrer: true});
    this.setState({dataID: muatan_id});
  }



 
  render() {
    const {error,listdata} = this.state;

    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/vendor-kiriman-detail?id='+this.state.dataID}/>)
    }

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )

    } else {
    return (
      <div class="page-content" id="page-content">
            <VendorHeader />
            <VendorFooter />
               
                  <div class="header header-fixed header-logo-left demo-shadow bottom-10 custom-header custom-tab-controls">
                      <div class="one-half one-half-custom">
                        <NavLink to="/vendor-kiriman" class="button  button-full button-xs  shadow-large bg-highlight bottom-0" >Aktif</NavLink>
                      </div>
                      <div class="one-half last-column last-column-custom">
                        <NavLink to="/vendor-kiriman-riwayat" class="button button-border button-full button-xs  shadow-large border-highlight color-highlight bottom-0">Riwayat</NavLink>

                      </div>
                      <div class="clear"></div>
                  </div>
                
            <div class="content top-80"></div>

            {listdata.map(data => (

              <div onClick={(e) => this.handleClick(data.muatan_id,e)}>
                <div class="content-boxed custom-box-order">
                  <div class="content top-0 custom-perjalanan">
                      <div class="timeline-deco"></div>
                      <div class="timeline-item">
                          <i class="fa fa-arrow-down bg-highlight shadow-large timeline-icon"></i>
                          <div class="timeline-item-content">
                              <h5 class="thin">{data.muatan_id} {data.asal}</h5>
                              <p class="under-heading font-10 bottom-15">{data.asal_alamat}</p>
                          </div>
                      </div>
                      <div class="timeline-item">
                          <i class="fa fa-dot-circle bg-highlight shadow-large timeline-icon"></i>
                           <div class="timeline-item-content">
                              <h5 class="thin">{data.tujuan}</h5>
                              <p class="under-heading font-10 bottom-15">{data.tujuan_alamat}</p>
                          </div>
                      </div>
                      <div class="clear"></div>
                  </div>
              </div>
              </div>
              
              ))}
    </div>
    )

  }
  }
}



export default VendorKiriman;
