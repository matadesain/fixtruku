import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";



class CustomerFooter extends Component {
  showSidebar(){
    console.log("HI");
  }

  render() {
    return (
        <div id="footer-menu" class="footer-menu-5-icons footer-menu-style-1">
              <NavLink to="/customer-muat"><i class="fa fa-home"></i><span>Muat</span></NavLink>
              <NavLink to="/customer-muatan"><i class="fa fa-paper-plane"></i><span>Muatan</span></NavLink>
              <NavLink to="/customer-kiriman"><i class="fa fa-truck"></i><span>Kiriman</span></NavLink>
              <NavLink to="/customer-notifikasi"><i class="fas fa-money-bill-wave"></i><span>Notifikasi</span></NavLink>
              <NavLink to="/customer-profil"><i class="fa fa-user"></i><span>Profil</span></NavLink>
              <div class="clear"></div>
        </div>
       
    );
  }
}

export default CustomerFooter;