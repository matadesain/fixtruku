import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";

class CompAddButton extends Component {
  
  render() {
  	const style = {
          width: "35px",
        };
        return (
            <div class="content">
              <NavLink to={this.props.linkAddButton} style={style} class="button back-to-top-icon back-to-top-icon-circle bg-highlight shadow-medium button-add">
                <i class="fa fa-plus"></i>
              </NavLink>
            </div>  
          );
    

  }
  
}

export default CompAddButton;