import React from "react";
import { Switch, Route } from "react-router-dom";
//import routes from "./routes";

import Home from "./pages/Home";
import Vendorlogin from "./pages/vendor/VendorLogin";
import Vendorregister from "./pages/vendor/VendorRegister";
import Vendorforgot from "./pages/vendor/VendorForgot";
import Vendorkiriman from "./pages/vendor/VendorKiriman";
import Vendorkirimandetail from "./pages/vendor/VendorKirimanDetail";
import Vendorkirimanriwayat from "./pages/vendor/VendorKirimanRiwayat";
import Vendormuatan from "./pages/vendor/VendorMuatan";
import Vendormuatandetail from "./pages/vendor/VendorMuatanDetail";
import Vendortruk from "./pages/vendor/VendorTruk";
import Vendortrukaddedit from "./pages/vendor/VendorTrukAddEdit";
import Vendorpenawaran from "./pages/vendor/VendorPenawaran";
import Vendorpenawarandetail from "./pages/vendor/VendorPenawaranDetail";
import Vendorpenawarandetailproses from "./pages/vendor/VendorPenawaranDetailProses";
import Vendorpenawarandetailselesai from "./pages/vendor/VendorPenawaranDetailSelesai";
import Vendorpenawaranriwayat from "./pages/vendor/VendorPenawaranRiwayat";
import Vendorprofil from "./pages/vendor/VendorProfil";
import Vendorprofilupdate from "./pages/vendor/VendorProfilUpdate";
import Vendorprofilpassword from "./pages/vendor/VendorProfilPassword";
import Vendorlogout from "./pages/vendor/VendorLogout";
import Vendornotifikasi from "./pages/vendor/VendorNotifikasi";



 import Customerlogin from "./pages/customer/CustomerLogin";
 import Customerregister from "./pages/customer/CustomerRegister";
 import Customerforgot from "./pages/customer/CustomerForgot";
import Customerkiriman from "./pages/customer/CustomerKiriman";
import Customerkirimandetail from "./pages/customer/CustomerKirimanDetail";
 import Customerkirimanriwayat from "./pages/customer/CustomerKirimanRiwayat";
 import Customermuatan from "./pages/customer/CustomerMuatan";
 import Customermuatandetail from "./pages/customer/CustomerMuatanDetail";
 import Customermuat from "./pages/customer/CustomerMuat";
 import Customernotifikasi from "./pages/customer/CustomerNotifikasi";
 import Customertruk from "./pages/customer/CustomerTruk";
 import Customertrukaddedit from "./pages/customer/CustomerTrukAddEdit";
import Customerpenawaran from "./pages/customer/CustomerPenawaran";
 import Customerpenawarandetail from "./pages/customer/CustomerPenawaranDetail";
import Customerpenawarandetailproses from "./pages/customer/CustomerPenawaranDetailProses";
import Customerpenawarandetailselesai from "./pages/customer/CustomerPenawaranDetailSelesai";
import Customerpenawaranriwayat from "./pages/customer/CustomerPenawaranRiwayat";
import Customerprofil from "./pages/customer/CustomerProfil";
import Customerlogout from "./pages/customer/CustomerLogout";
import Customerprofilupdate from "./pages/customer/CustomerProfilUpdate";
import Customerprofilpassword from "./pages/customer/CustomerProfilPassword";


class App extends React.Component {


  render() {
    return (
      <div>
      <Route exact path="/" component={Home} />
      <Route path="/vendor-login"  component={Vendorlogin} />
      <Route path="/vendor-register"  component={Vendorregister} />
      <Route path="/vendor-forgot"  component={Vendorforgot} />
      <Route path="/vendor-kiriman"  component={Vendorkiriman} />
      <Route path="/vendor-kiriman-detail"  component={Vendorkirimandetail} />
      <Route path="/vendor-kiriman-riwayat"  component={Vendorkirimanriwayat} />
      <Route path="/vendor-muatan"  component={Vendormuatan} />
      <Route path="/vendor-muatan-detail"  component={Vendormuatandetail} />
      <Route path="/vendor-truk"  component={Vendortruk} />
      <Route path="/vendor-truk-add-edit"  component={Vendortrukaddedit} />
      <Route path="/vendor-penawaran"  component={Vendorpenawaran} />
      <Route path="/vendor-penawaran-detail"  component={Vendorpenawarandetail} />
      <Route path="/vendor-penawaran-detail-proses"  component={Vendorpenawarandetailproses} />
      <Route path="/vendor-penawaran-detail-proses-selesai"  component={Vendorpenawarandetailselesai} />
      <Route path="/vendor-penawaran-riwayat"  component={Vendorpenawaranriwayat} />
      <Route path="/vendor-profil"  component={Vendorprofil} />
      <Route path="/vendor-profil-update"  component={Vendorprofilupdate} />
      <Route path="/vendor-profil-password"  component={Vendorprofilpassword} />
      <Route path="/vendor-logout"  component={Vendorlogout} />
      <Route path="/vendor-notifikasi"  component={Vendornotifikasi} />
 
      <Route path="/customer-login"  component={Customerlogin} />
      <Route path="/customer-register"  component={Customerregister} />
      <Route path="/customer-forgot"  component={Customerforgot} />
      <Route path="/customer-kiriman"  component={Customerkiriman} />
      <Route path="/customer-kiriman-detail"  component={Customerkirimandetail} />
      <Route path="/customer-kiriman-riwayat"  component={Customerkirimanriwayat} />
      <Route path="/customer-muatan"  component={Customermuatan} />
      <Route path="/customer-muatan-detail"  component={Customermuatandetail} />
      <Route path="/customer-muat"  component={Customermuat} />
      <Route path="/customer-notifikasi"  component={Customernotifikasi} />
      <Route path="/customer-truk"  component={Customertruk} />
      <Route path="/customer-truk-add-edit"  component={Customertrukaddedit} />
      <Route path="/customer-penawaran"  component={Customerpenawaran} />
      <Route path="/customer-penawaran-detail"  component={Customerpenawarandetail} />
      <Route path="/customer-penawaran-detail-proses"  component={Customerpenawarandetailproses} />
      <Route path="/customer-penawaran-detail-selesai"  component={Customerpenawarandetailselesai} />
      <Route path="/customer-penawaran-riwayat"  component={Customerpenawaranriwayat} />
      <Route path="/customer-profil"  component={Customerprofil} />
      <Route path="/customer-profil-update"  component={Customerprofilupdate} />
      <Route path="/customer-profil-password"  component={Customerprofilpassword} />
      <Route path="/customer-logout"  component={Customerlogout} />





    
      </div>
    );
  }
}


export default App;