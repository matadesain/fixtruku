import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";

class CompFormInputText extends Component {

   constructor(props) {
    super(props);
    this.state = {
      name:this.props.name,
      placeholder:this.props.placeholder,
      value:this.props.value,

      

     
    };
     this.onChange=this.onChange.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
    }

  render() {
    
  
        return (
                        <div class="input-style input-dark has-icon input-style-1 input-required">
                                    <i class="input-icon fa fa-user font-11"></i>
                                    <span>Phone</span>
                                    <em>(required)</em>
                                    <input type="text" name={this.state.name} placeholder={this.state.placeholder} value={this.state.value} required onChange={this.onChange} />
                                </div>
      
        );



    
  }
}

export default CompFormInputText;