import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";


class ChildA extends Component{
  constructor(props) {
    super(props);
    this.state = {
      nameA: "Steve"
    };
  }


  render() {
    return (
      <button onClick={() => this.props.changeName(this.state.nameA)}>
        change to my name
      </button>
    );
  }
}

class ChildB extends Component{
  constructor(props) {
    super(props);
    this.state = {
      nameB: "Elon"
    };
  }

  
  render() {
    return (
      <button onClick={() => this.props.changeName(this.state.nameB)}>
        change to my name
      </button>
    );
  }
}


class AlertSuccess extends Component{
  

  render() {
    var handleClose=this.props.handleClose;
    var show=this.props.show;
    var children=this.props.children;
    const showHideClassName = show ? 'menu menu-box-bottom menu-box-detached round-medium menu-active' : 'menu menu-box-bottom menu-box-detached round-medium';


    return (
      <div id="menu-success" class={showHideClassName} data-menu-height="315" data-menu-effect="menu-over">
          <h1 class="center-text top-30"><i class="fa fa-3x fa-check-circle color-green1-dark"></i></h1>
          <h1 class="center-text uppercase ultrabold top-30">All's Good</h1>
          <p class="boxed-text-large">
              You can continue with your previous actions.
          </p>
          <input onClick={handleClose} class="button bg-highlight button-m round-small bottom-20 top-30 shadow-huge" type="submit" value="SUBMIT" />
      </div>
    );
  }
}


export
{ 
  ChildA, 
  ChildB,
  AlertSuccess
};