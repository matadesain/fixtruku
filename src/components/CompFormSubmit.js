import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";

class CompFormSubmit extends Component {

			
  
  render() {
  	var id=this.props.id;
  	var linkRedirect=this.props.linkRedirect;
    
        return (
          <div>
        	<div class="content top-0  bottom-20">
            	<div class="divider bottom-20"></div>
                	<a href="#" class="button button-full button-xs button-round-large shadow-large bg-highlight bottom-0" onClick={(e) => this.handleClick(data.muatan_id,e)}>Ajukan Penawaran</a>
                <div class="clear"></div>
            </div>

            <div class="content">
              <NavLink to={this.props.linkAddButton} class="button back-to-top-icon back-to-top-icon-circle bg-highlight shadow-medium">
                <i class="fa fa-plus"></i>
              </NavLink>
            </div>  
            </div>
          );
    

  }
  
}

export default CompAddButton;