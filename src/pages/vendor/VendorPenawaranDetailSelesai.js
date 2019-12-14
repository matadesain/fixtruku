import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostData} from '../../services/PostData';
import VendorHeader from '../../components/VendorHeader';
import VendorFooter from '../../components/VendorFooter';
import 'url-search-params-polyfill';

class VendorPenawaranSelesai extends React.Component {
   constructor(props) {
    super(props);
    var search = new URLSearchParams(window.location.search);
    var id = search.get("id");
    let vendor_id=sessionStorage.getItem('vendor_id');

    this.state = {
      listdata:[],
      dataID:'',
      muatan_order_id:id,
      typeHeader:'back',
      linkBack:'vendor-muatan',
      vendor_id:vendor_id,
      redirectToReferrer: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickCancel = this.handleClickCancel.bind(this);
  }

  componentDidMount() {
    PostData('muatan_order',{'muatan_order_id':this.state.muatan_order_id,'vendor_id':this.state.vendor_id})
      .then((result) => {
        this.setState({listdata: result});
      },
      (error) => {
          this.setState({ error });
      }
      );
  }


  handleClick(muatan_order_id='') {
    
    //alert(muatan_order_id);
     PostData('selesai_muatan_order',{'muatan_order_id':muatan_order_id})
      .then((result) => {
        let responseJson = result;
      },
      (error) => {
          this.setState({ error });
      }
      );
      this.setState({redirectToReferrer: true});
  }

  handleClickCancel() {
    this.setState({redirectToReferrer: true});
  }
 
  render() {
    const {listdata,id} = this.state;

    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/vendor-muatan-detail-selesai'}/>)
    }

    return (
      <div class="page-content" id="page-content">
            <VendorHeader name={this.state.appName} typeHeader={this.state.typeHeader} linkBack={this.state.linkBack} />
            <VendorFooter name={this.state.appName}/>
            
           <div class="content top-80"></div>


              {listdata.map(data => (
                <div class="content top-0 bottom-20 custom-perjalanan">
                            <div class="timeline-deco"></div>
                            <div class="timeline-item">
                                <i class="fa fa-arrow-down bg-highlight shadow-large timeline-icon"></i>
                                <div class="timeline-item-content">
                                    <h5 class="thin">{data.asal}</h5>
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

                ))}

            <div class="content top-80">
              <h1 class="center-text top-30"><i class="fa fa-3x fa-check-circle color-green1-dark"></i></h1>
              <h1 class="center-text uppercase ultrabold top-30">Selesai</h1>
              <p class="boxed-text-large">
                  Muatan Berhasil Dikirim.
              </p>

            </div>

             
    
    </div>
    )

  
  }
}



export default VendorPenawaranSelesai;
