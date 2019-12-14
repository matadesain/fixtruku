import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostDataCustomer} from '../../services/PostDataCustomer';
import CustomerHeader from '../../components/CustomerHeader';
import CustomerFooter from '../../components/CustomerFooter';




class CustomerNotifikasi extends React.Component {

   constructor(props) {
    super(props);
    var search = new URLSearchParams(window.location.search);
    var id = search.get("id");
    let customer_id=sessionStorage.getItem('customer_id');

    this.state = {
      listdata:[],
      redirectToReferrer: false,
      dataID:'',
      id:'',
      customer_id:customer_id,

      appName:'Notifikasi'
    };
  }

  componentDidMount() {

    PostDataCustomer('notifikasi',{'id':this.state.customer_id})
      .then((result) => {
        this.setState({listdata: result});

      },
      (error) => {
          this.setState({ error });
      }


      );
    }

    
  handleClick(id='') {
    this.setState({redirectToReferrer: true});
    this.setState({dataID: id});
  }



 
  render() {
    const {error,listdata} = this.state;

    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/customer-muatan-detail?id='+this.state.dataID}/>)
    }

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )

    } else {
    return (
      <div class="page-content" id="page-content">
            <CustomerHeader name={this.state.appName} />
            <CustomerFooter />
            <div class="content top-80"></div>

            {listdata.map(data => (

              <div class="content-boxed top-0 content-boxed-full custom-content-boxed">
                <div class="content bottom-0">
                    <div class="link-list link-list-2">
                        <a class="top-10" href="component-ad-boxes.html">
                            <i class="fa fa-dollar-sign bg-green1-dark round-tiny"></i>
                            <span>{data.tipe_notifikasi}</span>
                            <strong>{data.notifikasi}</strong>
                            <i class="fa fa-angle-right"></i>
                        </a>      
                    </div>
                </div>
            </div>
              
              ))}
    </div>
    )

  }
  }
}



export default CustomerNotifikasi;
