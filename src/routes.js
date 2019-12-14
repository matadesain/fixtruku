import Home from "./pages/Home";
 import Vendorlogin from "./pages/vendor/VendorLogin";


import Vendorregister from "./pages/vendor/VendorRegister";
import Vendorforgot from "./pages/vendor/VendorForgot";

import Vendorkiriman from "./pages/vendor/VendorKiriman";
import Vendorkirimandetail from "./pages/vendor/VendorKirimanDetail";
import Vendorkirimanriwayat from "./pages/vendor/VendorKirimanRiwayat";

import Vendormuatan from "./pages/vendor/VendorMuatan";
import Vendormuatandetail from "./pages/vendor/VendorMuatanDetail";

import Vendornotifikasi from "./pages/vendor/VendorNotifikasi";
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




//import Gmap from "./pages/customer/Gmap";




 export default [
  {
     path: "/",
     component: Home
   },
   {
     path: "/vendor-login",
     component: Vendorlogin
   },
  {
    path: "/vendor-register",
    component: Vendorregister
  },
   {
    path: "/vendor-forgot",
    component: Vendorforgot
  },
   {
    path: "/vendor-muatan",
    component: Vendormuatan
  },
   {
    path: "/vendor-muatan-detail",
    component: Vendormuatandetail
  },
   {
    path: "/vendor-penawaran",
    component: Vendorpenawaran
  },
   {
    path: "/vendor-penawaran-detail",
    component: Vendorpenawarandetail
  },
   {
    path: "/vendor-penawaran-detail-proses",
    component: Vendorpenawarandetailproses
  },
   {
    path: "/vendor-penawaran-detail-selesai",
    component: Vendorpenawarandetailselesai
  },
   {
    path: "/vendor-penawaran-riwayat",
    component: Vendorpenawaranriwayat
  },
   {
    path: "/vendor-truk-add-edit",
    component: Vendortrukaddedit
  },
   {
    path: "/vendor-truk",
    component: Vendortruk
  },
   {
    path: "/vendor-notifikasi",
    component: Vendornotifikasi
  },
   {
    path: "/vendor-kiriman",
    component: Vendorkiriman
  },
   {
    path: "/vendor-kiriman-detail",
    component: Vendorkirimandetail
  },
   {
    path: "/vendor-kiriman-riwayat",
    component: Vendorkirimanriwayat
  },
   {
    path: "/vendor-profil",
    component: Vendorprofil
  },
  {
    path: "/vendor-profil-update",
    component: Vendorprofilupdate
  },
  {
    path: "/vendor-profil-password",
    component: Vendorprofilpassword
  },
   {
    path: "/vendor-logout",
    component: Vendorlogout
  },
  {
    path: "/customer-login",
    component: Customerlogin
  },
  {
    path: "/customer-register",
    component: Customerregister
  },
   {
    path: "/customer-forgot",
    component: Customerforgot
  },
   {
    path: "/customer-muatan",
    component: Customermuatan
  },
   {
    path: "/customer-muat",
    component: Customermuat
  },
   {
    path: "/customer-muatan-detail",
    component: Customermuatandetail
  },
   {
    path: "/customer-penawaran",
    component: Customerpenawaran
  },
   {
    path: "/customer-penawaran-detail",
    component: Customerpenawarandetail
  },
   {
    path: "/customer-penawaran-detail-proses",
    component: Customerpenawarandetailproses
  },
   {
    path: "/customer-penawaran-detail-selesai",
    component: Customerpenawarandetailselesai
  },
   {
    path: "/customer-penawaran-riwayat",
    component: Customerpenawaranriwayat
  },
   {
    path: "/customer-truk-add-edit",
    component: Customertrukaddedit
  },
   {
    path: "/customer-truk",
    component: Customertruk
  },
   {
    path: "/customer-notifikasi",
    component: Customernotifikasi
  },
   {
    path: "/customer-kiriman",
    component: Customerkiriman
  },
   {
    path: "/customer-kiriman-detail",
    component: Customerkirimandetail
  },
   {
    path: "/customer-kiriman-riwayat",
    component: Customerkirimanriwayat
  },
   {
    path: "/customer-profil",
    component: Customerprofil
  },
  {
    path: "/customer-profil-update",
    component: Customerprofilupdate
  },
   {
    path: "/customer-logout",
    component: Customerlogout
  }

 ];
