import React, { Component } from 'react';
import WineCard from './WineCard.jsx';

export function WinesDisplay() {
  return <h1>Wine Display</h1>
}

// class WinesDisplay extends Component {
//   constructor(props) {
//     super(props);
  
//   this.state = {
//     error: null,
//     isLoaded: false,
//     wineList: [],
//   };

//   this.addWine = this.addWine.bind(this);
//   this.deleteWine = this.deleteWine.bind(this);
//   this.updateWine = this.updateWine.bind(this);
// }

// componentDidMount() {
//   console.log('component mounted')
//   fetch('./api')
//     .then(res => res.json())
//     .then((result) => {
//       console.log(result.error);
//       this.setState({
//         isLoaded: true,
//         wineList: result,
//         error: result.error
//       });
//     },
//   )
//   .catch((error) => {
//     console.log('error:', error);
//   });
// }

//   render() {
//     console.log('component rendering');
//     const { error, wineList} = this.state;
//     console.log(error);
//     const wines = wineList
//     const getWine = wines
//     .map((wine, index) =>
//     <WineCard key={_id} wine={wineList[i]} /> 
//     );

//     if(error) {
//       return (
//         <div>Error: {error}</div>
//       );
//     }

//     return(
//       <div id = "winesDisplay" >
//         {getWine}
//       </div>
//     );
//   }
// };
// export default WinesDisplay;

// const WinesDisplay = props => {
//   console.log(props);
//   const{wineList} = props;
//   const wines = [];
//   for(let i = 0; i < wineList.length; i++) {
//     wines.push(<WineCard id={i} key={'wine' + i} wine={wineList[i]} />);
//   }

//   return(
//     <div className="displayBox">
//       <h4>Wines</h4>
//       {wines}
//     </div>
//   );
// };
export default WinesDisplay;