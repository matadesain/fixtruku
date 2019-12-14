import React,{ Component } from "react";
import {NavLink,Link,Redirect} from "react-router-dom";


class Home extends Component {





  render() {

    return (
    		
			<div class="cover-wrapper cover-has-buttons">
                    <div data-height="cover" class="caption cover-full">
                        <div class="caption-top caption-height-100">
                            <div class="caption-overlay"></div>
                            <div class="caption-bg">

                              <div class="content top-100">&nbsp;</div>
                              <div class="content center-text top-100">
                                  <h1 class="center-text bolder font-33">ELOG.TRUKU</h1>
                              </div>
                              <div class="content top-70">&nbsp;</div>
                              <div class="content center-text">
                                <NavLink to="customer-login" class="round-small button bg-highlight button-m button-full  button-m  bottom-10 ">Customer</NavLink>
                                <NavLink to="vendor-login" class="round-small button bg-white color-black button-m button-full  button-m  bottom-60">Vendor</NavLink>
                              </div>
                            </div>
                        </div>
                    </div>
      </div>



       
    );
  }
}



export default Home;
