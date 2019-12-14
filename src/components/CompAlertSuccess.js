import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";

class CompAlertSuccess extends Component {

  constructor(props){

    super(props);

        this.state={
          show: false
        }
  } 


  showModal(){
    this.setState({ show: true });
  }
  
  hideModal(){
    this.setState({ show: false });
  }


  render() {
    
  
        return (
          <div>
           <div id="menu-success" class={showHideClassName} data-menu-height="315" data-menu-effect="menu-over">
                <h1 class="center-text top-30"><i class="fa fa-3x fa-check-circle color-green1-dark"></i></h1>
                <h1 class="center-text uppercase ultrabold top-30">All's Good</h1>
                <p class="boxed-text-large">
                    You can continue with your previous actions.
                </p>
                <input onClick={handleClose} class="button bg-highlight button-m round-small bottom-20 top-30 shadow-huge" type="submit" value="SUBMIT" />
            </div>
                        <div class="input-style input-dark has-icon input-style-1 input-required">
                                    <i class="input-icon fa fa-user font-11"></i>
                                    <span>Phone</span>
                                    <em>(required)</em>
                                    <input type="text" name={this.state.name} placeholder={this.state.placeholder} value={this.state.value} required onChange={this.onChange} />
                                </div>
                                </div>                    
      
        );



    
  }
}

export default CompFormInputText;