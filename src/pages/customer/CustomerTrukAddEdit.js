import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostDataCustomer} from '../../services/PostDataCustomer';
import CustomerHeader from '../../components/CustomerHeader';
import CustomerFooter from '../../components/CustomerFooter';
import 'url-search-params-polyfill';

class CustomerTrukAddEdit extends React.Component {
   constructor(props) {
    super(props);
    var search = new URLSearchParams(window.location.search);
    var id = search.get("id");
    let customer_id=sessionStorage.getItem('customer_id');

    this.state = {
      listdata:[],
      dataID:id,
      typeHeader:'back',
      linkBack:'customer-muatan',
      redirectToReferrer: false,
      appName:'Truk',
      linkRedirect:'/customer-muatan-detail?id=',
      linkRedirectCancel:'/customer-muatan-detail?id='
    };

  }

  componentDidMount() {
    if(this.state.dataID=='1'){

      PostDataCustomer('customer_truk_detail',{'customer_truk_id':this.state.dataID})
        .then((result) => {
          this.setState({listdata: result});
        },
        (error) => {
            this.setState({ error });
        }
        );
    }


    
  }




  render() {
    const {listdata,id} = this.state;

    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/customer-muatan'}/>)
    }
    if(this.state.dataID=='0'){
    return (
      <div class="page-content" id="page-content">
            <CustomerHeader name={this.state.appName} typeHeader={this.state.typeHeader} linkBack={this.state.linkBack} />
            <CustomerFooter name={this.state.appName}/>
            

           <div class="content-boxed">
              <div class="content">
                  <h3 class="bolder">Form Truk</h3>
                  <p>
                      Pastikan semua isian terisi.
                  </p>

                  <div class="input-style input-style-1 input-required">
                      <span>Jenis Truk</span>
                      <em><i class="fa fa-angle-down"></i></em>
                      <select>
                          <option value="default" disabled="" selected="">Pilih Jenis Truk</option>
                          <option value="1">CDD</option>
                          <option value="3">KONTAINER</option>
                          <option value="5">CDE</option>
                          <option value="7">TRONTON</option>
                          <option value="9">VAN</option>
                          <option value="11">TRAILER</option>
                          <option value="13">PICKUP</option>
                          <option value="15">FUSO</option>
                      </select>
                  </div>

                  <div class="input-style has-icon input-style-1 input-required">
                      <i class="input-icon fa fa-user"></i>
                      <span class="input-style-1-active input-style-1-inactive">Merk / Manufacture</span>
                      <em><i class="fa fa-check color-green1-dark"></i></em>
                      <input type="name" placeholder="Merk Manufacture" />
                  </div>


                  <div class="input-style has-icon input-style-1 input-required">
                      <i class="input-icon fa fa-user"></i>
                      <span class="input-style-1-active input-style-1-inactive">No Polisi</span>
                      <em><i class="fa fa-check color-green1-dark"></i></em>
                      <input type="name" placeholder="No Polisi" />
                  </div>

                  <div class="input-style input-style-1 input-required">
                      <span class="input-style-1-active input-style-1-inactive">Masa Berlaku STNK</span>
                      <em><i class="fa fa-angle-down"></i></em>
                      <input type="date" value="1980-08-26" />
                  </div>


              </div>
          </div>
          <div class="content">
          <NavLink to="/customer-truk-add-edit" class="button  button-full button-round-small button-xs  shadow-large bg-highlight bottom-0" >Proses</NavLink>
          </div>
    </div>
    )
    }else if(this.state.dataID=='1'){
        return (
            <div class="page-content" id="page-content">
                  <CustomerHeader name={this.state.appName} typeHeader={this.state.typeHeader} linkBack={this.state.linkBack} />
                  <CustomerFooter name={this.state.appName}/>
                  

                 <div class="content-boxed">
                    <div class="content">
                        <h3 class="bolder">Form Truk</h3>
                        <p>
                            Pastikan semua isian terisi.
                        </p>

                        <div class="input-style input-style-1 input-required">
                            <span>Jenis Truk</span>
                            <em><i class="fa fa-angle-down"></i></em>
                            <select>
                                <option value="default" disabled="" selected="">Pilih Jenis Truk</option>
                                <option value="iOS">iOS</option>
                                <option value="Linux">Linux</option>
                                <option value="MacOS">MacOS</option>
                                <option value="Android">Android</option>
                                <option value="Windows">Windows</option>
                            </select>
                        </div>

                        <div class="input-style has-icon input-style-1 input-required">
                            <i class="input-icon fa fa-user"></i>
                            <span class="input-style-1-active input-style-1-inactive">Merk / Manufacture</span>
                            <em><i class="fa fa-check color-green1-dark"></i></em>
                            <input type="name" placeholder="Merk Manufacture" />
                        </div>


                        <div class="input-style has-icon input-style-1 input-required">
                            <i class="input-icon fa fa-user"></i>
                            <span class="input-style-1-active input-style-1-inactive">No Polisi</span>
                            <em><i class="fa fa-check color-green1-dark"></i></em>
                            <input type="name" placeholder="No Polisi" />
                        </div>

                        <div class="input-style input-style-1 input-required">
                            <span class="input-style-1-active input-style-1-inactive">Masa Berlaku STNK</span>
                            <em><i class="fa fa-angle-down"></i></em>
                            <input type="date" value="1980-08-26" />
                        </div>


                    </div>
                </div>
                <div class="content">
                <NavLink to="/customer-truk-add-edit" class="button  button-full button-round-small button-xs  shadow-large bg-highlight bottom-0" >Proses</NavLink>
                </div>
          </div>
          )

    }
  
  }
}



export default CustomerTrukAddEdit;
