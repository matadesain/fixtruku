import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";
import Select from 'react-select';
import Cleave from 'cleave.js/react';
import {PostData} from '../services/PostData';
import {PostDataCustomer} from '../services/PostDataCustomer';
import Geosuggest from 'react-geosuggest';
const google = window.google;





class CompProfilAkun extends Component {

  constructor(props) {
    super(props);
    let user=sessionStorage.getItem('user');
    let vendor_id=sessionStorage.getItem('vendor_id');
    let customer_id=sessionStorage.getItem('customer_id');


    this.state = {
      user: user,
      vendor_id:vendor_id,
      customer_id:customer_id,
      listdata_vendor:[],
      listdata_customer:[],
      listdata_bank:[],
      listdata_jenis_usaha:[],

      vendor_id:vendor_id,
      customer_id:customer_id,

      nama_perusahaan:'',
      npwp_id:'',
      nama_pic:'',
      jabatan_pic:'',
      telp_pic:'',
      alamat_perusahaan:'',
      bank_name:'',
      bank_number:'',
      atas_nama:'',
      jenis_usaha:'',
      firstname:'',
      lastname:'',

      class_menu_modal:'menu menu-box-bottom menu-box-detached round-medium',

    };
    this.onSubmit=this.onSubmit.bind(this);
    this.onChange=this.onChange.bind(this);
    this.changeAddress=this.changeAddress.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

    this.setState({
      listdata_bank: [
        {value: 'DKI', label: 'DKI'},
        {value: 'Mandiri', label: 'Mandiri'},
        {value: 'BCA', label: 'BCA'}
      ]
    });

    this.setState({
      listdata_jenis_usaha: [
        {value: 'PT', label: 'PT'},
        {value: 'CV', label: 'CV'},
        {value: 'Individu', label: 'Individu'}
      ]
    });

    if(this.state.user=='vendor'){
        PostData('vendordetail',{'vendor_id':this.state.vendor_id})
        .then((result) => {
          this.setState({nama_perusahaan: result[0].nama_perusahaan});  
          this.setState({npwp_id: result[0].npwp_id});
          this.setState({nama_pic: result[0].nama_pic});
          this.setState({jabatan_pic: result[0].jabatan_pic});
          this.setState({telp_pic: result[0].telp_pic});
          this.setState({alamat_perusahaan: result[0].alamat_perusahaan});
          this.setState({bank_name: result[0].bank_name});
          this.setState({bank_number: result[0].bank_number});
          this.setState({atas_nama: result[0].atas_nama});
          this.setState({jenis_usaha: result[0].jenis_usaha});
          this.setState({firstname: result[0].firstname});
          this.setState({lastname: result[0].lastname});
        },
        (error) => {
            this.setState({ error });
        }
        );

    

    }else if(this.state.user=='customer'){

      PostDataCustomer('customerdetail',{'customer_id':this.state.customer_id})
        .then((result) => {
          this.setState({nama_perusahaan: result[0].nama_perusahaan});  
          this.setState({npwp_id: result[0].npwp_id});
          this.setState({nama_pic: result[0].nama_pic});
          this.setState({jabatan_pic: result[0].jabatan_pic});
          this.setState({telp_pic: result[0].telp_pic});
          this.setState({alamat_perusahaan: result[0].alamat_perusahaan});
          this.setState({bank_name: result[0].bank_name});
          this.setState({bank_number: result[0].bank_number});
          this.setState({atas_nama: result[0].atas_nama});
          this.setState({jenis_usaha: result[0].jenis_usaha});
          this.setState({firstname: result[0].firstname});
          this.setState({lastname: result[0].lastname});
        },
        (error) => {
            this.setState({ error });
        }
        );


    }
  }  


  changeAddress(suggestion) {
    this.setState({
      alamat_perusahaan: suggestion.label
    });
  } catch (e) {
    this.setState({
      alamat_perusahaan: ""
    });
  }
  

  onSubmit() {
    
      if(this.state.user=='vendor'){
        PostData('updatevendor',
        {
        'vendor_id'           :this.state.vendor_id,
        'nama_perusahaan'     :this.state.nama_perusahaan,
        'npwp_id'             :this.state.npwp_id,
        'nama_pic'            :this.state.nama_pic,
        'telp_pic'            :this.state.telp_pic,
        'jabatan_pic'         :this.state.jabatan_pic,
        'alamat_perusahaan'   :this.state.alamat_perusahaan,
        'bank_name'           :this.state.bank_name,
        'bank_number'         :this.state.bank_number,
        'atas_nama'           :this.state.atas_nama,
        'jenis_usaha'         :this.state.jenis_usaha,
        }).then((result) => {
            let responseJson = result;
            if(responseJson.userData){
                this.setState({redirectToReferrer: true});
            }
        });  
      
      }else if(this.state.user=='customer'){
        PostDataCustomer('updatecustomer',
        {
        'customer_id'           :this.state.customer_id,
        'nama_perusahaan'     :this.state.nama_perusahaan,
        'npwp_id'             :this.state.npwp_id,
        'nama_pic'            :this.state.nama_pic,
        'telp_pic'            :this.state.telp_pic,
        'jabatan_pic'         :this.state.jabatan_pic,
        'alamat_perusahaan'   :this.state.alamat_perusahaan,
        'bank_name'           :this.state.bank_name,
        'bank_number'         :this.state.bank_number,
        'atas_nama'           :this.state.atas_nama,
        'jenis_usaha'         :this.state.jenis_usaha,
        }).then((result) => {
            let responseJson = result;
            if(responseJson.userData){
                this.setState({redirectToReferrer: true});
            }
        });  

      }  

      this.setState({class_menu_modal:'menu menu-box-bottom menu-box-detached round-medium menu-active'});

  } 

  closeModal(){
    this.setState({class_menu_modal:'menu menu-box-bottom menu-box-detached round-medium'});
  }
  


  render() {

        const { listdata_bank,listdata_jenis_usaha } = this.state;
        var fixtures = [
          {label: 'Old Elbe Tunnel, Hamburg', location: {lat: 53.5459, lng: 9.966576}},
          {label: 'Reeperbahn, Hamburg', location: {lat: 53.5495629, lng: 9.9625838}},
          {label: 'Alster, Hamburg', location: {lat: 53.5610398, lng: 10.0259135}}
        ];

        let action;
        const style_modal = {
          height: "315px",
          opacity: "1",
          display: "block",
        };
                        action=
                           <div id="menu-success" class={this.state.class_menu_modal} style={style_modal} data-menu-height="300" data-menu-effect="menu-over">
                              <h1 class="center-text top-30"><i class="fa fa-3x fa-check-circle color-green1-dark"></i></h1>
                              <h1 class="center-text uppercase ultrabold top-30">Berhasil</h1>
                              <p class="boxed-text-large">
                                  Proses Berhasil Disimpan
                              </p>
                                  <input onClick={this.closeModal}  class="button bg-red1-dark button-m round-small bottom-20 top-30 shadow-huge" type="submit" value="Close" />
                          </div>
                     
        return (
                            
                            <div class="content-boxed top-80">
                                <div class="content">
                                  <div class="input-style input-dark input-style-1 input-required">
                                      <span class="input-style-1-active input-style-1-inactive">Nama Perusahaan</span>
                                      <em>(required)</em>
                                      <input type="text" name="nama_perusahaan" placeholder="Nama Perusahaan"  required onChange={this.onChange} value={this.state.nama_perusahaan} />
                                  </div>

                                  <div class="input-style input-dark input-style-1 input-required">
                                      <span class="input-style-1-active input-style-1-inactive">No NPWP</span>
                                      <em>(required)</em>
                                      <input type="text" name="npwp_id" placeholder="No NPWP" required onChange={this.onChange} value={this.state.npwp_id} />
                                  </div>

                                  <div class="input-style input-dark input-style-1 input-required">
                                      <span class="input-style-1-active input-style-1-inactive">Nama PIC</span>
                                      <em>(required)</em>
                                      <input type="text" name="nama_pic" placeholder="Nama PIC" required onChange={this.onChange} value={this.state.nama_pic} />
                                  </div>

                                  <div class="input-style input-dark input-style-1 input-required">
                                      <span class="input-style-1-active input-style-1-inactive">Jabatan PIC</span>
                                      <em>(required)</em>
                                      <input type="text" name="jabatan_pic" placeholder="Jabatan PIC" required onChange={this.onChange} value={this.state.jabatan_pic} />
                                  </div>

                                  <div class="input-style input-dark input-style-1 input-required">
                                      <span class="input-style-1-active input-style-1-inactive">Telp PIC</span>
                                      <em>(required)</em>
                                      <input type="text" name="telp_pic" placeholder="Telp PIC" required onChange={this.onChange} value={this.state.telp_pic} />
                                  </div>

                                  <div class="input-style input-dark input-style-1 input-required">
                                      <span class="input-style-1-active input-style-1-inactive">Nama Bank</span>
                                      <em>(required)</em>
                                      <select name="bank_name" onChange={this.onChange} value={this.state.bank_name}>
                                        {listdata_bank.map(data => (
                                          (() => {
                                            if (data.value === this.state.bank_name) { 
                                              return (<option value={data.value} selected>{data.label}</option>)
                                            }else{
                                              return (<option value={data.value}>{data.label}</option>)
                                            }  
                                          })()
                                        ))}  
                                      </select>
                                  </div>

                                  <div class="input-style input-dark input-style-1 input-required">
                                      <span class="input-style-1-active input-style-1-inactive">No.Rekening</span>
                                      <em>(required)</em>
                                      <input type="text" name="bank_number" placeholder="No Rekening" required onChange={this.onChange} value={this.state.bank_number} />
                                  </div>

                                  <div class="input-style input-dark input-style-1 input-required">
                                      <span class="input-style-1-active input-style-1-inactive">Atas Nama</span>
                                      <em>(required)</em>
                                      <input type="text" name="atas_nama" placeholder="Atas Nama" required onChange={this.onChange} value={this.state.atas_nama} />
                                  </div>

                                

                                  <div class="input-style input-dark input-style-1 input-required">
                                      <span class="input-style-1-active input-style-1-inactive">Jenis Usaha</span>
                                      <em>(required)</em>
                                      <select name="jenis_usaha" onChange={this.onChange} value={this.state.jenis_usaha}>
                                        {listdata_jenis_usaha.map(data => (
                                          (() => {
                                            if (data.value === this.state.jenis_usaha) { 
                                              return (<option value={data.value} selected>{data.label}</option>)
                                            }else{
                                              return (<option value={data.value}>{data.label}</option>)
                                            }  
                                          })()
                                        ))}  
                                      </select>

                                  </div>

                                  <div>
                                      <span class="input-style-1-active input-style-1-inactive">Tujuan Muat</span>
                                      <input type="hidden" name="alamat_perusahaan" value={this.state.alamat_perusahaan} />
                                      <Geosuggest
                                        ref={el=>this._geoSuggest=el}
                                        placeholder="Alamat Perusahaan"
                                        initialValue={this.state.alamat_perusahaan}
                                        fixtures={fixtures}
                                        onSuggestSelect={ this.changeAddress }
                                        location={new google.maps.LatLng(53.558572, 9.9278215)}
                                        radius="20"
                                         />
                                  </div>

                                 
                                  
                                  <div class="content top-0  bottom-20">
                                    <div class="form-button">
                                      <input onClick={this.onSubmit} class="button bg-highlight button-m round-small bottom-20 top-30 shadow-huge" type="submit" value="SUBMIT" />
                                    </div>                   
                                       {action}
                                  </div>
                                  


                                </div>
                            </div>
              

      );                      

    
  }
}

export default CompProfilAkun;