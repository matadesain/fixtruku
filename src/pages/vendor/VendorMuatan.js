import React,{ Component } from "react";
import withBase from "./withBase";
import {NavLink,Redirect} from "react-router-dom";
import {PostData} from '../../services/PostData';
import VendorHeader from '../../components/VendorHeader';
import VendorFooter from '../../components/VendorFooter';
import CompWarning from '../../components/CompWarning';
import CompMuatanList from '../../components/CompMuatanList';


class VendorMuatan extends React.Component {

   constructor(props) {
    super(props);

    this.state = {
      listdata:[],
      error:'',

      appName:'Muatan',
      linkRedirect:'/vendor-muatan-detail?id='
    };
  }

  componentDidMount() {
    PostData('muatan',{'muatan_id':''})
        .then((result) => {
          this.setState({listdata: result});
        },
        (error) => {
            this.setState({ error });
        }
      );
    }

    
  handleClick(muatan_id='') {
    this.setState({redirectToReferrer: true});
    this.setState({dataID: muatan_id});
  }

 
  render() {
    const {error,listdata} = this.state;
   
    return (
      <div class="page-content" id="page-content">
            <VendorHeader name={this.state.appName}/>
            <VendorFooter />
            {
                listdata.length ?
                <CompMuatanList listdata={this.state.listdata} linkRedirect={this.state.linkRedirect} />
                : 
                <CompWarning />
            }
      </div>
    )
  }  
}



export default VendorMuatan;
