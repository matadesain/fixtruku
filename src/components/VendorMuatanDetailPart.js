import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";

class VendorMuatanDetailPart extends Component {

  
  render() {
       return (
                <div>
                    <div class="content-boxed custom-box-order">
                        <div class="content top-0 custom-perjalanan">
                            <div class="timeline-deco"></div>
                            <div class="timeline-item">
                                <i class="fa fa-arrow-down bg-highlight shadow-large timeline-icon"></i>
                                <div class="timeline-item-content">
                                    <h5 class="thin">{this.props.asal}</h5>
                                    <p class="under-heading font-10 bottom-15">{this.props.asal_alamat}</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <i class="fa fa-dot-circle bg-highlight shadow-large timeline-icon"></i>
                                <div class="timeline-item-content">
                                    <h5 class="thin">{this.props.tujuan}</h5>
                                    <p class="under-heading font-10 bottom-15">{this.props.tujuan_alamat}</p>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
              </div>

      );



}
}

export default VendorMuatanDetailPart;