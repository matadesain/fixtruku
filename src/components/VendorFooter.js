import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";



class VendorFooter extends Component {
  showSidebar(){
    console.log("HI");
  }

  render() {
    return (
        <div id="footer-menu" class="footer-menu-5-icons footer-menu-style-1">
              <NavLink to="/vendor-muatan"><i class="fa fa-home"></i><span>Muatan</span></NavLink>
              <NavLink to="/vendor-penawaran"><i class="fa fa-paper-plane"></i><span>Orderan</span></NavLink>
              <NavLink to="/vendor-truk"><i class="fa fa-truck"></i><span>Truk</span></NavLink>
              <NavLink to="/vendor-notifikasi"><i class="fas fa-money-bill-wave"></i><span>Notifikasi</span></NavLink>
              <NavLink to="/vendor-profil"><i class="fa fa-user"></i><span>Profil</span></NavLink>
              <div class="clear"></div>
        </div>
       
    );
  }
}

export default VendorFooter;