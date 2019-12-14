import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostDataCustomer} from '../../services/PostDataCustomer';
import CustomerHeader from '../../components/CustomerHeader';
import CustomerFooter from '../../components/CustomerFooter';
import 'url-search-params-polyfill';

class CustomerPenawaranDetail extends React.Component {
   constructor(props) {
    super(props);
    var search = new URLSearchParams(window.location.search);
    var id = search.get("id");
    let customer_id=sessionStorage.getItem('customer_id');

    this.state = {
      listdata:[],
      dataID:'',
      muatan_order_id:id,
      typeHeader:'back',
      linkBack:'customer-muatan',
      customer_id:customer_id,
      redirectToReferrer: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickCancel = this.handleClickCancel.bind(this);
  }

  componentDidMount() {
    PostDataCustomer('muatan_order',{'muatan_order_id':this.state.muatan_order_id,'customer_id':this.state.customer_id})
      .then((result) => {
        this.setState({listdata: result});

      },
      (error) => {
          this.setState({ error });
      }
      );
  }


  handleClick(muatan_id='') {

     PostDataCustomer('create_muatan_order',{'muatan_id':this.state.muatan_id,'customer_id':this.state.customer_id})
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
      return (<Redirect to={'/customer-muatan'}/>)
    }

    return (
      <div class="page-content" id="page-content">
            <CustomerHeader name={this.state.appName} typeHeader={this.state.typeHeader} linkBack={this.state.linkBack} />
            <CustomerFooter name={this.state.appName}/>
            
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
                        <h4>{data.tanggal_muat}</h4>
                        <i class="fa fa-phone"></i>
                    </div>
                    <div class="vcard-field no-border">
                        <strong>Jenis Kendaraan</strong>
                        <h4>{data.truk}</h4>
                        <i class="fa fa-phone"></i>
                    </div>
                </div>
              ))}

              {listdata.map(data => (    
                <div class="content top-0 bottom-0">
                    <p class="uppercase bolder color-highlight bottom-0">Budget</p>
                    <h1 class="uppercase under-heading ultrabold fa-2x bottom-10 color-highlight">{data.tarif}</h1>
                    
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
                            {data.deskripsi}
                        </p>
                    </div>
                </div>
              ))}

             


    </div>
    )

  
  }
}



export default CustomerPenawaranDetail;
