import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostDataCustomer} from '../../services/PostDataCustomer';
import CustomerHeader from '../../components/CustomerHeader';
import CustomerFooter from '../../components/CustomerFooter';
import Geosuggest from 'react-geosuggest';
import Cleave from 'cleave.js/react';
import './CustomerStyle.css';

import CompInputText from '../../components/CompInputText';
const google = window.google;


class CustomerMuat extends React.Component {

   constructor(props) {
    super(props);
    let customer_id=sessionStorage.getItem('customer_id');

    this.state = {
      
      redirectToReferrer: false,
      dataID:'',
      muatan_id:'',

      listdata:[],
      listdata_truk:[],
      listdata_truk_kategori:[],
      listdata_jenis_barang:[],

      value: '',
      error:'',

      appName:'Muat',

        asal            :'',
        tanggal_muat    :'',
        tujuan          :'',
        tanggal_bongkar :'',
        truk_id         :'',
        truk_kategori_id:'',
        berat           :'',
        berat_satuan    :'',
        jenis_barang_id :'',
        tarif           :'',
        deskripsi       :'',
        customer_id     :customer_id,
        asal_alamat:'',
        tujuan_alamat:'',
          startDateMuat: new Date(),
          startDateBongkar: new Date(),
          

        class_menu_modal_warning:'menu menu-box-bottom menu-box-detached round-medium',
        class_menu_modal_success:'menu menu-box-bottom menu-box-detached round-medium'
          
    };

    this.submitCreateMuatan=this.submitCreateMuatan.bind(this);
    this.onChange=this.onChange.bind(this);
    this.changeAddressAsal = this.changeAddressAsal.bind(this);
    this.changeAddressTujuan = this.changeAddressTujuan.bind(this);
    this.closeModal = this.closeModal.bind(this);


  }

  closeModal(){
    this.setState({class_menu_modal_warning:'menu menu-box-bottom menu-box-detached round-medium'});
    this.setState({class_menu_modal_success:'menu menu-box-bottom menu-box-detached round-medium'});
  }



  onChange(event){
    var input_name=event.target.name;
    var input_value=event.target.value;
    this.setState({[input_name]:event.target.value});

    if(input_name=='truk_id'){
        this.setState({truk_id:input_value});
        PostDataCustomer('truk_kategori',{'truk_id':event.target.value})
          .then((result) => {
            this.setState({listdata_truk_kategori: result});
          },
          (error) => {
              this.setState({ error:'' });
          }

          );
    }
  }

  componentDidMount() {

    PostDataCustomer('truk')
      .then((result) => {
        this.setState({listdata_truk: result});
      },
      (error) => {
          this.setState({ error:'' });
      }

      );

     PostDataCustomer('jenis_barang')
      .then((result) => {
        this.setState({listdata_jenis_barang: result});
      },
      (error) => {
          this.setState({ error:'' });
      }

      );  
  }

  
 

  submitCreateMuatan() {
    if(
      this.state.asal=='' ||
      this.state.tanggal_muat=='' ||
      this.state.tujuan=='' ||
      this.state.tanggal_bongkar=='' ||
      this.state.truk_id=='' ||
      this.state.truk_kategori_id=='' ||
      this.state.berat=='' ||
      this.state.berat_satuan=='' ||
      this.state.jenis_barang_id=='' ||
      this.state.tarif==''
      )
    { 
      this.setState({class_menu_modal_warning:'menu menu-box-bottom menu-box-detached round-medium menu-active'});
    }else{

      


      PostDataCustomer('createmuatan',
        {
        'asal'            :this.state.asal,
        'tanggal_muat'    :this.state.tanggal_muat,
        'tujuan'          :this.state.tujuan,
        'tanggal_bongkar' :this.state.tanggal_bongkar,
        'truk_id'         :this.state.truk_id,
        'truk_kategori_id':this.state.truk_kategori_id,
        'berat'           :this.state.berat,
        'berat_satuan'    :this.state.berat_satuan,
        'jenis_barang_id' :this.state.jenis_barang_id,
        'tarif'           :this.state.tarif,
        'deskripsi'       :this.state.deskripsi,
        'customer_id'     :this.state.customer_id,
        'asal_alamat':this.state.asal_alamat,
        'tujuan_alamat':this.state.tujuan_alamat,

        }).then((result) => {
          let responseJson = result;
          if(responseJson.userData){
              // sessionStorage.setItem('userData',JSON.stringify(responseJson));
              this.setState({redirectToReferrer: true});
          }
          });

        this.setState({class_menu_modal_success:'menu menu-box-bottom menu-box-detached round-medium menu-active'});

        this.setState({asal:''});
        this.setState({tanggal_muat:''});
        this.setState({tujuan:''});
        this.setState({tanggal_bongkar:''});
        this.setState({truk_id:''});
        this.setState({truk_kategori_id:''});
        this.setState({berat:''});
        this.setState({berat_satuan:''});
        this.setState({jenis_barang_id:''});
        this.setState({tarif:''});
        this.setState({deskripsi:''});
        this.setState({asal_alamat:''});
        this.setState({tujuan_alamat:''});
          


    }      
 
  }

  


  


 changeAddressAsal(suggestion) {
 
  try {

  var components = suggestion.gmaps.address_components;
  var length=components.length;
  var i=0;
  var text='';
  for (i = 0; i < length; i++) {
    text += components[i]['long_name'] + ",";
  } 
  var address=text.substring(0, text.length - 1);;
  this.setState({asal_alamat:address});

  // console.log(this.state.asal_alamat);

  this.setState({
      asal: suggestion.label
    });
  } catch (e) {
    this.setState({
      asal: ""
    });
  }

}


changeAddressTujuan(suggestion) {
  var components = suggestion.gmaps.address_components;
  var length=components.length;
  var i=0;
  var text='';
  for (i = 0; i < length; i++) {
    text += components[i]['long_name'] + ",";
  } 
  var address=text.substring(0, text.length - 1);;
  this.setState({tujuan_alamat:address});




  try {
    this.setState({
      tujuan: suggestion.label
    });
  } catch (e) {
    this.setState({
      tujuan: ""
    });
  }
  
}


  render() {
    const {error,listdata_truk,listdata_truk_kategori,listdata_jenis_barang} = this.state;
    var fixtures = [];

    if (this.state.redirectToReferrer){
     return (<Redirect to={'/customer-muat'}/>)
    }
    
    const style_modal = {
          height: "315px",
          opacity: "1",
          display: "block",
        };
    let  action_warning;   
    action_warning=<div id="menu-warning" class={this.state.class_menu_modal_warning} style={style_modal} data-menu-height="300" data-menu-effect="menu-over">
                            <h1 class="center-text top-30"><i class="fa fa-3x fa-times color-red2-dark"></i></h1>
                            <h1 class="center-text uppercase ultrabold top-30">Gagal Menyimpan</h1>
                            <p class="boxed-text-large">
                            Harap isi form dengan benar.
                            </p>
                            <input onClick={this.closeModal} class="button bg-red1-dark button-m  round-small bottom-20 top-30 shadow-huge" type="submit" value="Close" />
                          </div>

    let action_success;                    
    action_success=<div id="menu-warning" class={this.state.class_menu_modal_success} style={style_modal} data-menu-height="300" data-menu-effect="menu-over">
                            <h1 class="center-text top-30"><i class="fa fa-3x fa-times color-red2-dark"></i></h1>
                            <h1 class="center-text uppercase ultrabold top-30">Berhasil</h1>
                            <p class="boxed-text-large">
                            Berhasil Menyimpan
                            </p>
                            <input onClick={this.closeModal} class="button bg-red1-dark button-m  round-small bottom-20 top-30 shadow-huge" type="submit" value="Close" />
                          </div>                      

    return (


    <div class="page-content" id="page-content">

            <CustomerHeader name={this.state.appName} />
            <CustomerFooter />
            
            <div class="content-boxed top-80">
              <div class="content">
                <h3 class="bolder">Rute</h3>
              </div>

              <div class="content">
                <div>
                      <span class="input-style-1-active input-style-1-inactive">Asal Muat</span>
                      <input type="hidden" name="asal" value={this.state.asal} />
                      <input type="hidden" name="asal_alamat" value={this.state.asal_alamat} />
                      <Geosuggest
                        ref={el=>this._geoSuggest=el}
                        placeholder="Asal"
                        fixtures={fixtures}
                        onSuggestSelect={ this.changeAddressAsal }
                        location={new google.maps.LatLng(53.558572, 9.9278215)}
                        radius="20"
                        name="asal"
                         />
                  </div>
              </div>

              <div class="content">
                   <div class="input-style input-style-1 input-required">
                      <span class="input-style-1-active input-style-1-inactive">Tanggal Muat</span>
                      <em><i class="fa fa-angle-down"></i></em>
                      <Cleave 
                              name="tanggal_muat"
                              onChange={this.onChange}
                              placeholder="dd-mm-yyyy" 
                              value={this.state.tanggal_muat}
                              options={{
                              date: true,
                              delimiter: '-',
                              datePattern: ['d', 'm', 'Y']
                              }}
                          />
                  </div>
              </div>

              <div class="content">
                  <div>
                      <span class="input-style-1-active input-style-1-inactive">Tujuan Muat</span>
                      <input type="hidden" name="tujuan" value={this.state.tujuan} />
                      <input type="hidden" name="tujuan_alamat" value={this.state.tujuan_alamat} />
                      <Geosuggest
                        ref={el=>this._geoSuggest=el}
                        placeholder="Tujuan"
                        fixtures={fixtures}
                        onSuggestSelect={ this.changeAddressTujuan }
                        location={new google.maps.LatLng(53.558572, 9.9278215)}
                        radius="20"
                        name="asal"
                         />
                  </div>
              </div>

              <div class="content">
                   <div class="input-style input-style-1 input-required">
                      <span class="input-style-1-active input-style-1-inactive">Tanggal Bongkar</span>
                      <em><i class="fa fa-angle-down"></i></em>
                      <Cleave 
                              name="tanggal_bongkar"
                              onChange={this.onChange}
                              placeholder="dd-mm-yyyy" 
                              value={this.state.tanggal_bongkar}
                              options={{
                              date: true,
                              delimiter: '-',
                              datePattern: ['d', 'm', 'Y']
                              }}
                          />
                  </div>
              </div>

             
              
          </div>

            


           <div class="content-boxed">
              <div class="content">


                  <h3 class="bolder">Muatan</h3>
                  <div class="input-style input-style-1 input-required">
                      <span class="input-style-1-active input-style-1-inactive">Jenis Truk</span>
                      <em><i class="fa fa-angle-down"></i></em>
                      <select name="truk_id" onChange={this.onChange} value={this.state.truk_id}>
                        <option value="" disabled="" selected="">Jenis Truk</option>
                        {listdata_truk.map(data => (    
                            <option value={data.truk_id}>{data.truk}</option>
                        ))}    
                      </select>
                  </div>


                   <div class="input-style input-style-1 input-required">
                      <span class="input-style-1-active input-style-1-inactive">Kategori Muatan</span>
                      <em><i class="fa fa-angle-down"></i></em>
                      <select name="truk_kategori_id" onChange={this.onChange} value={this.state.truk_kategori_id}>
                          <option value="default" disabled="" selected="">Kategori Muatan Truk</option>
                           {listdata_truk_kategori.map(data => (    
                            <option value={data.truk_kategori_id}>{data.kategori}</option>
                           ))}    
                      </select>
                  </div>


                  <div class="input-style input-style-1 input-required">
                      <span class="input-style-1-active input-style-1-inactive">Perkiraan Berat Total</span>
                      <em><i class="fa fa-angle-down"></i></em>
                      <input type="text" placeholder="Berat" name="berat" value={this.state.berat} onChange={this.onChange} />
                  </div>

                  <div class="input-style input-style-1 input-required">
                      <span class="input-style-1-active input-style-1-inactive">Satuan Berat (kg/ton)</span>
                      <em><i class="fa fa-angle-down"></i></em>
                       <select name="berat_satuan" onChange={this.onChange} value={this.state.berat_satuan}>
                          <option value="default" disabled="" selected="">Satuan Berat (kg/ton)</option>
                          <option value="ton">Ton</option>
                          <option value="kg">Kg</option>
                      </select>
                  </div>

                  <div class="input-style input-style-1 input-required">
                      <span class="input-style-1-active input-style-1-inactive">Jenis Barang</span>
                      <em><i class="fa fa-angle-down"></i></em>
                      <select name="jenis_barang_id" onChange={this.onChange} value={this.state.jenis_barang_id}>
                          <option value="default" disabled="" selected="">Jenis Barang</option>
                          {listdata_jenis_barang.map(data => (    
                          <option value={data.jenis_barang_id}>{data.jenis_barang}</option>
                          ))}
                      </select>
                  </div>

                  <div class="input-style input-style-1 input-required">
                      <span class="input-style-1-active input-style-1-inactive">Tarif Pengiriman</span>
                      <em><i class="fa fa-angle-down"></i></em>
                      <input type="text" placeholder="Tarif" name="tarif" value={this.state.tarif} onChange={this.onChange} />
                  </div>

                  <div class="input-style input-style-1 input-required">
                      <span class="input-style-1-active input-style-1-inactive">Deskripsi</span>
                      <em><i class="fa fa-angle-down"></i></em>
                      <textarea placeholder="" name="deskripsi" onChange={this.onChange}>{this.state.deskripsi}</textarea>
                  </div>
                  <div class="form-button">
                     <input onClick={this.submitCreateMuatan} class="button bg-highlight button-m round-small bottom-20 top-30 shadow-huge" type="submit" value="SUBMIT" />
                  </div>

              </div>

          </div>     
          {action_success}  
          {action_warning}

         
         

    </div>
    )

  
  }
}



export default CustomerMuat;
