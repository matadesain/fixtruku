import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostData} from '../../services/PostData';
import {PostDataCustomer} from '../../services/PostDataCustomer';
import VendorHeader from '../../components/VendorHeader';
import VendorFooter from '../../components/VendorFooter';
import 'url-search-params-polyfill';
import CompFormInputText from '../../components/CompFormInputText';
import CompFormInputDate from '../../components/CompFormInputDate';
import CompFormSelectApi from '../../components/CompFormSelectApi';
import Select from 'react-select';
import Cleave from 'cleave.js/react';



class VendorTrukAddEdit extends React.Component {
   constructor(props) {
    super(props);
    var search = new URLSearchParams(window.location.search);
    var id = search.get("id");
    let vendor_id=sessionStorage.getItem('vendor_id');

    this.state = {
      listdata:[],
      listdata_truk:[],
      dataID:id,
      typeHeader:'back',
      linkBack:'vendor-truk',
      redirectToReferrer: false,
      vendor_id:vendor_id,

      appName:'Truk',
      linkRedirect:'/customer-muatan-detail?id=',
      linkRedirectCancel:'/customer-muatan-detail?id=',
      value_truk:'',


      phone:'',
      truk_id:'',
      merk_manufactur:'',
      no_polisi:'',
      stnk_masa:'',

      default_value_truk:'',
      default_label_truk:'',

      some_variable:'',
      select_attribute:'',


      class_menu_success:'menu menu-box-bottom menu-box-detached round-medium',
      class_menu_error:'menu menu-box-bottom menu-box-detached round-medium',

    };

    this.onSubmit=this.onSubmit.bind(this);
    this.onChange=this.onChange.bind(this);


    this.closeModal = this.closeModal.bind(this);
    this.resetCards = this.resetCards.bind(this);
    this.timer = null;
  }


  // state = {
  //       value: { label: this.props.val, value: this.props.val },
  //   }
    
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


   closeModal(){
    this.setState({class_menu_success:'menu menu-box-bottom menu-box-detached round-medium'});
    this.setState({class_menu_error:'menu menu-box-bottom menu-box-detached round-medium'});
    clearInterval(this.timer);
  }

    resetCards() {
    // alert('asd');
    this.setState({class_menu_success:'menu menu-box-bottom menu-box-detached round-medium'});
    this.setState({class_menu_error:'menu menu-box-bottom menu-box-detached round-medium'});
    clearInterval(this.timer);
  }

  
    // handleChange(value) {
    //     this.setState({ value: value })
    // }

  onSubmit() {
    if(this.state.dataID == '0'){
       PostData('create_truk',
        {
        'vendor_id'         :this.state.vendor_id,
        'truk_id'           :this.state.truk_id,
        'merk_manufactur'   :this.state.merk_manufactur,
        'stnk_masa'         :this.state.stnk_masa,
        'no_polisi'         :this.state.no_polisi,
      }).then((result) => {
          let responseJson = result;
          if(responseJson.userData){
              this.setState({redirectToReferrer: true});
          }
      });

    }else{
       PostData('update_truk',
        {
        'vendor_truk_id'    :this.state.dataID,
        'vendor_id'         :this.state.vendor_id,
        'truk_id'           :this.state.truk_id,
        'merk_manufactur'   :this.state.merk_manufactur,
        'stnk_masa'         :this.state.stnk_masa,
        'no_polisi'         :this.state.no_polisi,
      }).then((result) => {
          let responseJson = result;
          if(responseJson.userData){
              this.setState({redirectToReferrer: true});
          }
      });


    }  

    
        this.setState({dataID:''});
        this.setState({vendor_id:''});
        this.setState({truk_id:''});
        this.setState({merk_manufactur:''});
        this.setState({stnk_masa:''});
        this.setState({no_polisi:''});
     

     this.setState({class_menu_success:'menu menu-box-bottom menu-box-detached round-medium menu-active'});

 
  }


  // onChange(e){
  //   this.setState({[e.target.name]:e.target.value});
  //   }

  // handleChange = selectedOption => {
  //   this.setState({ selectedOption });
  //   console.log('Option selected:', selectedOption);
  //   this.setState({value_select:selectedOption.value});
  // };  



  componentDidMount() {
    if(this.state.dataID != '0'){

      PostData('vendor_truk_detail',{'vendor_truk_id':this.state.dataID})
        .then((result) => {

          this.setState({listdata: result});
          this.setState({merk_manufactur: result[0].merk_manufactur});  
          this.setState({stnk_masa: result[0].stnk_masa});
          this.setState({no_polisi: result[0].no_polisi});
          this.setState({truk_id: result[0].truk_id});


        },
        (error) => {
            this.setState({ error });
        }
        );

    }    
        PostDataCustomer('truk_select')
          .then((result) => {
            this.setState({listdata_truk: result});
          },
          (error) => {
              this.setState({ error:'' });
          }

        );  
  }


 


  render() {
    const {listdata,listdata_truk,id,some_variable} = this.state;
    const {selectedOption } = this.state;
      //alert(default_value);




    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/vendor-muatan'}/>)
    }
   
        return (
            <div class="page-content" id="page-content">
                  <VendorHeader name={this.state.appName} typeHeader={this.state.typeHeader} linkBack={this.state.linkBack} />
                  <VendorFooter name={this.state.appName}/>
                  
              {
                <div>
                            <div class="content-boxed">
                                <div class="content">
                                  <div class="input-style input-dark input-style-1 input-required">
                                      <span class="input-style-1-active input-style-1-inactive">Manufactur</span>
                                      <em>(required)</em>
                                      <input type="text" name="merk_manufactur" placeholder="Merk / Manufactur"  required onChange={this.onChange} value={this.state.merk_manufactur} />
                                  </div>

                                  <div class="input-style input-dark input-style-1 input-required">
                                      <span class="input-style-1-active input-style-1-inactive">No Polisi</span>
                                      <em>(required)</em>
                                      <input type="text" name="no_polisi" placeholder="No Polisi" required onChange={this.onChange} value={this.state.no_polisi} />
                                  </div>

                                  <div class="input-style input-dark input-style-1 input-required">
                                      <span class="input-style-1-active input-style-1-inactive">Masa Berlaku STNK</span>
                                      <em>(required)</em>

                                      <Cleave 
                                          name="stnk_masa"
                                          onChange={this.onChange}
                                          placeholder="dd-mm-yyyy" 
                                          value={this.state.stnk_masa}
                                          options={{
                                          date: true,
                                          delimiter: '-',
                                          datePattern: ['d', 'm', 'Y']
                                          }}
                                      />

                                  </div>

                                  <div class="input-style input-style-1 input-required">
                                      <span class="input-style-1-active input-style-1-inactive">Truk</span>
                                      <em><i class="fa fa-exclamation-triangle color-red2-light"></i></em>
                                      <select name="truk_id" onChange={this.onChange} value={this.state.truk_id}>
                                        {listdata_truk.map(data => (
                                          (() => {
                                           if ( data.value === this.state.truk_id) { 
                                              return (<option value={data.value} selected>{data.label}</option>)
                                            } else{
                                              return (<option value={data.value}>{data.label}</option>)                                          
                                            } 
                                          })()
                                        ))}  
                                          
                                      </select>
                                  </div>

                                 

                                  <div class="form-button">
                                    <input onClick={this.onSubmit} class="button bg-highlight button-m round-small bottom-20 top-30 shadow-huge" type="submit" value="SUBMIT" />
                                  </div>


                                </div>
                            </div>


                            <div id="menu-success" class={this.state.class_menu_success} data-menu-height="315" data-menu-effect="menu-over">
                              <div class="content">
                                <h1 class="center-text top-30"><i class="fa fa-3x fa-check-circle color-green1-dark"></i></h1>
                                <h1 class="center-text uppercase ultrabold top-30">Berhasil Disimpan</h1>
                                <div class="form-button">
                                <input onClick={this.closeModal} class="button bg-green1-dark button-m  round-small bottom-20 top-30 shadow-huge" type="submit" value="Close" />
                                </div>
                              </div>
                            </div>
                </div>

                } 
            </div>
          )

    
  }
}



export default VendorTrukAddEdit;
