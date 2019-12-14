import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";
import Cleave from 'cleave.js/react';

class CompFormInputDate extends Component {

   constructor(props) {
    super(props);
    this.state = {
     
    };
  }

 

  render() {
  
        return (
                        <div class="input-style input-style-1 input-required">
                            <span class="input-style-1-active input-style-1-inactive">{this.props.label}</span>
                            <em><i class="fa fa-angle-down"></i></em>
                            <Cleave placeholder="{this.props.placeholder}" value={this.props.value}
                              options={{
                              date: true,
                              delimiter: '-',
                              datePattern: ['d', 'm', 'Y']
                              }}
                          />
                        </div>
      
        );



    
  }
}

export default CompFormInputDate;