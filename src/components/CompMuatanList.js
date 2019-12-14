import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";

class CompMuatanList extends Component {

  constructor(props) {
    super(props);
    let user=sessionStorage.getItem('user');
    let customer_id=sessionStorage.getItem('customer_id');
    let vendor_id=sessionStorage.getItem('vendor_id');
    this.state = {
      redirectToReferrer: false,
      dataID:'',
      user:user
    };
  }

  handleClick(muatan_id='') {
    this.setState({redirectToReferrer: true});
    this.setState({dataID: muatan_id});
  }

    statusMenunggu(status='',deskripsi='') {

      if(this.state.user=='customer'){

      return (
                          <div class="boxed-text-huge bottom-20">
                              <h1><i class="fa fa-hourglass-half color-yellow1-dark"></i></h1>
                              <h2 class="uppercase bold color-yellow1-dark">Menunggu Penawaran</h2>
                              <p class="under-heading color-yellow1-dark bottom-20">Sedang Menunggu Penawaran Dari Customer</p>

                          </div>  

        
      );
      }
    }

     statusDiterima(status='',deskripsi='') {
      return (
                          <div class="boxed-text-huge">
                              <h1><i class="fa fa-check-circle color-green1-dark"></i></h1>
                              <h2 class="uppercase bold color-green1-dark">{status}</h2>
                              <p class="under-heading color-green1-dark bottom-20">{status}</p>
                          </div>  

        
      );
    }

     statusSelesai(status='',deskripsi='') {
      return (
                          <div class="boxed-text-huge">
                              <h1><i class="fa fa-check-circle color-green1-dark"></i></h1>
                              <h2 class="uppercase bold">{status}</h2>
                              <p class="under-heading color-green1-dark bottom-20">{status}</p>

                          </div>  

        
      );
    }

    statusPengajuan(status='',deskripsi='') {
        return (
                            <div class="boxed-text-huge">
                                <h1><i class="fa  fa-tag color-dark3-light"></i></h1>
                                <h2 class="uppercase bold color-dark3-light">{status}</h2>
                                <p class="under-heading color-dark3-light bottom-20">{status}</p>
                            </div>  

          
        );
      }

     statusDiterima(status='',deskripsi='') {
      return (
                          <div class="boxed-text-huge">
                              <h1><i class="fa fa-check-circle color-green1-dark"></i></h1>
                              <h2 class="uppercase bold color-green1-dark">{status}</h2>
                              <p class="under-heading color-green1-dark bottom-20">{status}</p>
                          </div>  

        
      );
    }

 

 

  render() {

        var listdata=this.props.listdata;
        var linkRedirect=this.props.linkRedirect;

        if (this.state.redirectToReferrer) {
          return (<Redirect to={linkRedirect+this.state.dataID}/>)
        }
       return (
        <div>
          <div class="content top-80"></div> 
          {listdata.map(data => (
                    <div onClick={(e) => this.handleClick(data.muatan_id,e)}>
                      <div class="content-boxed custom-box-order">
                        <div class="content top-0 custom-perjalanan">
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

                         {(() => {
                          switch (data.muatan_order_status_id) {
                          case '1'  : 
                          return this.statusPengajuan('Vendor Mengajukan Penawaran',data.deskripsi_status);

                          case '3'  : 
                          return this.statusDiterima('Penawaran Disetujui & Proses Angkut',data.deskripsi_status);

                          case '5'  : 
                          return this.statusSelesai(data.status,data.deskripsi_status);

                          default  : 
                          return this.statusMenunggu(data.status,data.deskripsi_status);
                        }
                        })()}


                      </div>
                    </div>
                    ))} 

         
         </div>         
      );



    }
  
}

export default CompMuatanList;