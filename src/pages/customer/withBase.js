// import React from "react";

// export default WrappedComponent =>
//   class extends React.Component {
//     state = {
//       isLoading: true
//     };

//     componentDidMount() {
//       this.props.handleChangePage();
//       this.hideLoader();
//     }

//     hideLoader = () => {
//       // This is for demo purpose
//       const proc = new Promise(resolve => {
//         setTimeout(() => resolve(), 0);
//       });
//       proc.then(() => this.setState({ isLoading: false }));
//     };

//     render() {
//       return (
//         <div>
//           {this.state.isLoading ? <p>Loading...</p> : <WrappedComponent />}
//         </div>
//       );
//     }
//   };
