import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";

class CompGantiPassword extends Component {

  constructor(props) {
    super(props);
    let ses_email=sessionStorage.getItem('ses_email');
    this.state = {
      ses_email: ses_email,
    };
  }


  handleClick(muatan_id='') {

  
  }


  render() {


    if (sessionStorage.getItem('ses_email')==null){
     return (<Redirect to={'/vendor-login'}/>)
    }
   
        return (
          <div>
                              <div class="content-boxed">
                                  <div class="content">
                                      <h3 class="bolder">Ganti Password</h3>
                                      
                                      <div class="input-style has-icon input-style-1 input-required"><i class="input-icon fa fa-key"></i><span class="input-style-1-active input-style-1-inactive">Password Baru</span><em><i class="fa fa-check color-green1-dark"></i></em>
                                          <input type="name" name="password" placeholder="Password" />
                                      </div>
                                      
                                      
                                  </div>

                                   <div class="content top-0  bottom-20">
                                    <div class="divider bottom-20"></div>
                                        <a href="#" class="button button-full button-xs button-round-large shadow-large bg-highlight bottom-0" onClick={(e) => this.handleClick(e)}>Ganti Password</a>
                                    <div class="clear"></div>
                                   </div>
                              </div> 


                             
          </div>                    
      

      );                      

    
  }
}

export default CompGantiPassword;