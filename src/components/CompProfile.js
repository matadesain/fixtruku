import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";
// import {ChildA,ChildB} from './CompLibrary';


class CompProfile extends Component {

constructor(props) {
    super(props);
    let ses_email=sessionStorage.getItem('ses_email');
    this.state = {
      ses_email: ses_email,name: "Bill"
    };
  }		


  changeName(){
    this.setState({ name });
  };



  render() {
    	var linkUpdateProfile=this.props.linkUpdateProfile;
    	var linkGantiPassword=this.props.linkGantiPassword;
    	var linkGantiPhone=this.props.linkGantiPhone;
    	
        return (
        <div>	
            <div class="content-boxed top-80">
		            <div class="content bottom-5">
		                <h3 class="bolder">Update Profil</h3>
		                
		                <div class="link-list link-list-1">
		                    <NavLink to={linkUpdateProfile}>
		                        <i class="fa fa-user-circle color-yellow1-dark"></i>
		                        <span>Lengkapi Profil</span>
		                        <i class="fa fa-angle-right"></i>
		                    </NavLink>
		                   
		                    <NavLink to={linkGantiPassword}>
		                        <i class="fa fa-key color-yellow1-dark"></i>
		                        <span>Ganti Password</span>
		                        <i class="fa fa-angle-right"></i>
		                    </NavLink>

		                    <NavLink to={linkGantiPhone}>
		                        <i class="fa fa-mobile color-yellow1-dark"></i>
		                        <span>Ganti No Handphone</span>
		                        <i class="fa fa-angle-right"></i>
		                    </NavLink>
		                </div>
		            </div>
		        </div>


		        <div class="content-boxed">
		              <div class="content">
		                  <h3 class="bolder">Informasi Akun</h3>
		                  <div class="link-list link-list-3">
		                      <a href="#" class="round-small shadow-tiny">
		                          <i class="fa fa-at color-blue2-dark"></i>
		                          <span>{this.state.ses_email}</span>
		                          <strong>Email Yang Terdaftar</strong>
		                          <em class="color-green1-dark">Aktif</em>
		                          <i class="fa fa-check-circle color-green1-dark"></i>
		                      </a>
		                  </div>
		              </div>
		        </div>




        </div>  


          );

  }
  
}



export default CompProfile;