import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostDataCustomer} from '../../services/PostDataCustomer';
import CustomerHeader from '../../components/CustomerHeader';
import CustomerFooter from '../../components/CustomerFooter';




class CustomerTruk extends React.Component {

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
      customer_id:customer_id
    };
  }

  componentDidMount() {

    PostDataCustomer('customer_truk',{'customer_id':this.state.customer_id})
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
      return (<Redirect to={'/customer-truk-add-edit?id='+this.state.dataID}/>)
    }

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )

    } else {
    return (
      <div class="page-content" id="page-content">
            <CustomerHeader />
            <CustomerFooter />

            <div class="header header-fixed header-logo-left demo-shadow bottom-10 custom-header custom-tab-controls">
              <NavLink to="/customer-truk-add-edit?id=0" class="button  button-full button-xs  shadow-large bg-highlight bottom-0" >Tambah</NavLink>
            </div>

            <div class="content top-80"></div>

            {listdata.map(data => (
            <div onClick={(e) => this.handleClick(data.customer_truk_id,e)}>  
              <div class="content-boxed top-0 content-boxed-full custom-content-boxed">
                <div class="content bottom-0">
                    <div class="link-list link-list-2">
                        <a>
                            <i class="fa fa-dollar-sign bg-green1-dark round-tiny"></i>
                            <span>No Polisi : {data.no_polisi}</span>
                            <strong>{data.stnk_masa}</strong>
                            <i class="fa fa-angle-right"></i>
                        </a>      
                    </div>
                </div>
              </div>
            </div>  
              ))}
    </div>
    )

  }
  }
}



export default CustomerTruk;
