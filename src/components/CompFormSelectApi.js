import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";
import Cleave from 'cleave.js/react';
import Select from 'react-select';

class CompFormSelectApi extends Component {

   constructor(props) {
    super(props);
    this.state = {
      listdata:[],
      value_select:''
      //label: props.val, value: props.val
    };
  }

 // state = {
 //        value: { label: this.props.val, value: this.props.val },
 //        selectedOption: null
 //  }

//  state = {
//         value: { label: this.props.val, value: this.props.val },
//     }

 




  render() {
    const { selectedOption } = this.state;
    var default_value=this.props.default_value;
    var default_label=this.props.default_label;
   
        return (
                        <div class="input-style input-style-1 input-required">
                            <span>{this.props.label}</span>
                            <em><i class="fa fa-angle-down"></i></em>
                            <input type="hidden" value={this.state.value_select} name={this.props.name} />
                            

                            <Select
                                options={this.options}
                                value={this.state.value}
                                onChange={value => this.handleChange(value)}
                                defaultValue={{ label: 2002, value: 2002 }}
                            />
                        </div>
      
        );



    
  }
}

export default CompFormSelectApi;