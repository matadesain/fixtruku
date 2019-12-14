import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostData} from '../../services/PostData';
import VendorHeader from '../../components/VendorHeader';
import VendorFooter from '../../components/VendorFooter';
import 'url-search-params-polyfill';

class VendorKirimanDetail extends React.Component {
   constructor(props) {
    super(props);
    var search = new URLSearchParams(window.location.search);
    var id = search.get("id");
    let vendor_id=sessionStorage.getItem('vendor_id');

    this.state = {
      listdata:[],
      dataID:'',
      muatan_id:id,
      typeHeader:'back',
      linkBack:'vendor-muatan',
      vendor_id:vendor_id
    };
  }

  componentDidMount() {
    PostData('muatan_kiriman',{'muatan_id':this.state.muatan_id,'vendor_id':this.state.vendor_id})
      .then((result) => {
        this.setState({listdata: result});

      },
      (error) => {
          this.setState({ error });
      }


      );
  }


  handleClick(id='') {

    

  }
 
  render() {
    const {listdata,id} = this.state;
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

             {listdata.map(data => (    
                <div class="content top-0 bottom-20 custom-kiriman">
                    <div class="vcard-field  no-border">
                        <strong>Tanggal Kirim</strong>
                        <h4>25 Jan 2019</h4>
                        <i class="fa fa-phone"></i>
                    </div>
                    <div class="vcard-field no-border">
                        <strong>Jenis Kendaraan</strong>
                        <h4>Wing Box</h4>
                        <i class="fa fa-phone"></i>
                    </div>
                </div>
              ))}

              {listdata.map(data => (    
                <div class="content top-0 bottom-0">
                    <p class="uppercase bolder color-highlight bottom-0">Budget</p>
                    <h1 class="uppercase under-heading ultrabold fa-2x bottom-10 color-highlight">Rp 2000.000</h1>
                    
                </div>
              ))}

               {listdata.map(data => (    
                <div class="content top-0 bottom-20 custom-review">
                    <div class="review-1">
                        <em class="left"></em>
                        <em class="right"> Terkirim</em>
                        <u class="opacity-50">21st October 2021</u>
                        <strong class="regular-bold font-13">Sri Maemunah</strong>
                        <span>
                            <i class="fa fa-star color-yellow1-dark"></i>
                            <i class="fa fa-star color-yellow1-dark"></i>
                            <i class="fa fa-star color-yellow1-dark"></i>
                            <i class="fa fa-star color-yellow1-dark"></i>
                            <i class="fa fa-star color-yellow1-dark"></i>
                        </span>
                        <div class="divider bottom-20"></div>
                        <h1>Deskripsi</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ligula enim. Proin volutpat consectetur ipsum a imperdiet. Nulla elementum, lectus a sagittis venenatis, lacus justo pharetra velit, eget venenatis est felis eget mi. Donec tincidunt efficitur nulla, sed viverra mauris facilisis vitae.
                        </p>
                    </div>
                </div>
              ))}

             

              {listdata.map(data => (    
                <div class="content top-0  bottom-20">
                    <div class="divider bottom-20"></div>
                    <div class="one-half">
                       <a href="#" class="button button-border button-full button-xs button-round-large shadow-large border-highlight color-highlight bottom-0">Cancel</a>
                    </div>
                    <div class="one-half last-column">
                         <a href="#" class="button button-full button-xs button-round-large shadow-large bg-highlight bottom-0" onClick={(e) => this.handleClick(data.muatan_id,e)}>Ajukan kiriman</a>
                    </div>
                    <div class="clear"></div>
                </div>
              ))}


    </div>
    )

  
  }
}



export default VendorKirimanDetail;
