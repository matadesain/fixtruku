import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostDataCustomer} from '../../services/PostDataCustomer';
import CustomerHeader from '../../components/CustomerHeader';
import CustomerFooter from '../../components/CustomerFooter';
import 'url-search-params-polyfill';



class CustomerPenawaran extends React.Component {

   constructor(props) {
    super(props);
    var search = new URLSearchParams(window.location.search);
    var id = search.get("id");
    let customer_id=sessionStorage.getItem('customer_id');

    this.state = {
      listdata:[],
      redirectToReferrer: false,
      dataID:'',
      id:'',
      customer_id:customer_id,
      muatan_order_status_id:''
    };
  }

  componentDidMount() {

    PostDataCustomer('muatan_order',{'muatan_order_id':'','customer_id':this.state.customer_id})
      .then((result) => {
        this.setState({listdata: result});

      },
      (error) => {
          this.setState({ error });
      }


      );
    }

    
  handleClick(muatan_order_id='',muatan_order_status_id='') {

    this.setState({redirectToReferrer: true});
    this.setState({dataID: muatan_order_id});
    this.setState({muatan_order_status_id: muatan_order_status_id});
  }



 
  render() {
    const {error,listdata} = this.state;

    if (this.state.redirectToReferrer) {
      if(this.state.muatan_order_status_id=='1'){
        return (<Redirect to={'/customer-penawaran-detail?id='+this.state.dataID}/>)
      }else if(this.state.muatan_order_status_id=='3'){
        return (<Redirect to={'/customer-penawaran-detail-proses?id='+this.state.dataID}/>)
      }else if(this.state.muatan_order_status_id=='5'){
        return (<Redirect to={'/customer-penawaran-detail-selesai?id='+this.state.dataID}/>)
      }

    }

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )

    } else {
    return (
      <div class="page-content" id="page-content">
            <CustomerHeader />
            <CustomerFooter />
               
                  <div class="header header-fixed header-logo-left demo-shadow bottom-10 custom-header custom-tab-controls">
                      <div class="one-half one-half-custom">
                        <NavLink to="/customer-penawaran" class="button  button-full button-xs  shadow-large bg-highlight bottom-0" >Aktif</NavLink>
                      </div>
                      <div class="one-half last-column last-column-custom">
                        <NavLink to="/customer-penawaran-riwayat" class="button button-border button-full button-xs  shadow-large border-highlight color-highlight bottom-0">Riwayat</NavLink>

                      </div>
                      <div class="clear"></div>
                  </div>
                
            <div class="content top-80"></div>

            {listdata.map(data => (

              <div onClick={(e) => this.handleClick(data.muatan_order_id,data.muatan_order_status_id,e)}>
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

                  <div class="divider"></div>
                  <h1 class="center-text uppercase ultrabold top-20">{data.status}</h1>
                  <p class="boxed-text-large">{data.deskripsi_status}
                  </p>
                  
                </div>
              </div>
              
              ))}
    </div>
    )

  }
  }
}



export default CustomerPenawaran;
