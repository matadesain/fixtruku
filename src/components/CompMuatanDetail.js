import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";
import {PostDataCustomer} from '../services/PostDataCustomer';
import {PostData} from '../services/PostData';


class CompMuatanDetail extends Component {

  constructor(props) {
    super(props);
    let user=sessionStorage.getItem('user');
    let customer_id=sessionStorage.getItem('customer_id');
    let vendor_id=sessionStorage.getItem('vendor_id');
    this.state = {
      redirectToReferrer: false,
      dataID:'',
      user:user,
      customer_id:customer_id,
      vendor_id:vendor_id,
      class_menu_confirm:'menu menu-box-bottom menu-box-detached round-medium',
      redirectPage:''
    };

    this.submitPengajuan = this.submitPengajuan.bind(this);
    this.submitConfirm = this.submitConfirm.bind(this);
    this.closeModal = this.closeModal.bind(this);



  }

  vendor(){

    
  }

 
  submitPengajuan(muatan_id='') {

     PostData('create_muatan_order',{'muatan_id':muatan_id,'vendor_id':this.state.vendor_id})
      .then((result) => {
        let responseJson = result;
      },
      (error) => {
          this.setState({ error });
      }
      );
      this.setState({redirectToReferrer: true});
      this.setState({redirectPage: 'vendor-penawaran'});
  }

  submitSelesai(muatan_id='',muatan_order_id=''){
     var muatan_order_status_id='5';
     PostData('update_muatan_order',
      {
      'muatan_id':muatan_id,
      'vendor_id':this.state.vendor_id,
      'muatan_order_id':muatan_order_id,
      'muatan_order_status_id':'5',
      })
      .then((result) => {
        let responseJson = result;
      },
      (error) => {
          this.setState({ error });
      }
      );
  }

  submitConfirm()
  {
    this.setState({class_menu_confirm:'menu menu-box-bottom menu-box-detached round-medium menu-active'});
  }
  
  closeModal(){
    this.setState({class_menu_confirm:'menu menu-box-bottom menu-box-detached round-medium'});
  }

  render() {
        var data=this.props.listdata;
        var linkRedirect=this.props.linkRedirect;
        var muatan_id=data['muatan_id'];
        var muatan_order_id=data['muatan_order_id'];
        var muatan_order_status_id=data['muatan_order_status_id'];
        var user=this.state.user;
        let action;
        let desc;
        const style_modal = {
          height: "315px",
          opacity: "1",
          display: "block",
        };

        if (this.state.redirectToReferrer) {
          return (<Redirect to={this.state.redirectPage}/>)
        }

        

        if(user=='vendor'){
            if(muatan_id){
              if(muatan_order_id || muatan_order_status_id){
                  if(muatan_order_status_id=='1'){
                     action=
                      <div>
                          <div class="boxed-text-huge">
                              <h1><i class="fa fa-check-circle color-green1-dark"></i></h1>
                              <h2 class="uppercase bold">{data['status']}</h2>
                              <p class="under-heading color-highlight bottom-20">{data['deskripsi_status']}</p>
                          </div> 
                      </div> 
                  }else if(muatan_order_status_id=='3'){
                       action=
                       <div>
                          <div class="boxed-text-huge">
                              <h1><i class="fa fa-check-circle color-green1-dark"></i></h1>
                              <h2 class="uppercase bold">{data['status']}</h2>
                              <p class="under-heading color-highlight bottom-20">{data['deskripsi_status']}</p>
                              <input onClick={(e) => this.submitConfirm(data['muatan_id'],e)}  class="button bg-green1-dark button-m round-small bottom-20 top-30 shadow-huge" type="submit" value="Selesaikan Pekerjaan" />

                          </div> 

                          <div id="menu-confirm" class={this.state.class_menu_confirm} style={style_modal} data-menu-height="200" data-menu-effect="menu-over">
                            <h1 class="center-text uppercase ultrabold top-20">Yakin Ingin Diproses ?</h1>
                            <p class="boxed-text-large">
                                Pastikan apakah Anda Ingin Memproses.
                            </p>
                            <div class="content left-50 right-50">
                                <div class="one-half">
                                  <input onClick={(e) => this.submitSelesai(data['muatan_id'],data['muatan_order_id'],e)}  class="button bg-green1-dark button-m round-small bottom-20 top-30 shadow-huge" type="submit" value="Prosess" />
                                </div>
                                <div class="one-half last-column">
                                  <input onClick={this.closeModal}  class="button bg-red1-dark button-m round-small bottom-20 top-30 shadow-huge" type="submit" value="Cancel" />
                                </div>
                            </div>
                          </div>
                      </div>  

                  }else{
                     action=<div>
                          <div class="boxed-text-huge">
                              <h1><i class="fa fa-check-circle color-green1-dark"></i></h1>
                              <h2 class="uppercase bold">{data['status']}</h2>
                              <p class="under-heading color-highlight bottom-20">{data['deskripsi_status']}</p>
                          </div> 
                      </div> 
                  }  
              }else{
                 action=
                      <div class="content top-0  bottom-20">
                        <div class="form-button">
                          <input onClick={(e) => this.submitConfirm(e)}  class="button bg-highlight button-m round-small bottom-20 top-30 shadow-huge" type="submit" value="Pengajuan" />
                        </div>                   
                         
                         <div id="menu-confirm" class={this.state.class_menu_confirm} style={style_modal} data-menu-height="200" data-menu-effect="menu-over">
                            <h1 class="center-text uppercase ultrabold top-20">Yakin Ingin Diproses ?</h1>
                            <p class="boxed-text-large">
                                Pastikan apakah Anda Ingin Memproses.
                            </p>
                            <div class="content left-50 right-50">
                                <div class="one-half">
                                  <input onClick={(e) => this.submitPengajuan(data['muatan_id'],e)}  class="button bg-green1-dark button-m round-small bottom-20 top-30 shadow-huge" type="submit" value="Proses" />
                                </div>
                                <div class="one-half last-column">
                                  <input onClick={this.closeModal}  class="button bg-red1-dark button-m round-small bottom-20 top-30 shadow-huge" type="submit" value="Cancel" />
                                </div>
                            </div>
                          </div> 
                      </div>

              }
            }
        }


         if(user=='vendor'){
          desc=<div class="content top-0 bottom-20 custom-review">
                    <div class="review-1">
                        <em class="left"></em>
                        <em class="right"> Tgl Posting</em>
                        <u class="opacity-50">{data['add_date']}</u>
                        <strong class="regular-bold font-13">{data['nama_perusahaan']}</strong>
                        <div class="divider bottom-20"></div>
                        <h1>Deskripsi</h1>
                        <p>
                            {data['deskripsi']}
                        </p>
                    </div>
                  </div>
         }else{
            desc=<div class="content top-0 bottom-20 custom-review">
                    <div class="review-1">
                        <em class="left"></em>
                        <em class="right"> Tgl Posting</em>
                        <u class="opacity-50">{data['add_date']}</u>
                        <strong class="regular-bold font-13">{data['nama_perusahaan']}</strong>
                        <div class="divider bottom-20"></div>
                        <h1>Deskripsi</h1>
                        <p>
                            {data['deskripsi']}
                        </p>
                    </div>
                  </div>

         }
       return (
          <div>
            <div class="content top-80"></div>
                <div class="content-boxed">
                  <div class="content top-0 custom-perjalanan">
                              <div class="timeline-deco"></div>
                              <div class="timeline-item">
                                  <i class="fa fa-arrow-down bg-highlight shadow-large timeline-icon"></i>
                                  <div class="timeline-item-content">
                                      <h5 class="thin">{data['asal']}</h5>
                                      <p class="under-heading font-10 bottom-15">{data['asal_alamat']}</p>
                                  </div>
                              </div>
                              <div class="timeline-item">
                                  <i class="fa fa-dot-circle bg-highlight shadow-large timeline-icon"></i>
                                   <div class="timeline-item-content">
                                      <h5 class="thin">{data['tujuan']}</h5>
                                      <p class="under-heading font-10 bottom-15">{data['tujuan_alamat']}</p>
                                  </div>
                              </div>
                  </div>

                  <div class="content top-0 bottom-0">
                    <p class="uppercase bolder color-highlight bottom-0">Budget</p>
                    <h1 class="uppercase under-heading ultrabold fa-2x bottom-10 color-highlight">{data['tarif']}</h1>
                    
                  </div>

                 

                  {desc}
                  {action}
                 

                </div>


                        

        </div>
            
      );



    }
  
}

export default CompMuatanDetail;