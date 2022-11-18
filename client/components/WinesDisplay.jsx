import React from 'react';
import WineCard from './WineCard.jsx';
import { Component } from 'react';
import { Link } from 'react-router-dom';

// export function WinesDisplay() {
//   return <h2>Wine Display</h2>
// }

// export function WinesDisplay() {
//   return <h2>Wine Display</h2>
// }
class WinesDisplay extends Component {
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        wineList: [],
      };

      // this.addWine = this.addWine.bind(this);
      // this.deleteWine = this.deleteWine.bind(this);
      // this.updateWine = this.updateWine.bind(this);
    }

    componentDidMount() {
      console.log('component mounted');
      fetch('/wines')
        .then(res => res.json())
        .then((result) => {
          console.log(result.error);
          return this.setState({
            isLoaded: true,
            wineList: result,
            error: result.error
          });
        })
        .catch((error) => {
          console.log('error:', error);
        });
    }

    render(){
      console.log('component rendering');
      const { error, wineList } = this.state;
      console.log(error);
      const wines = wineList;
      const getWine = wines
        .map((wine, index) => {
        return (
        <WineCard key={index} wine={wine} />
        );
        });

      if (error) {
        return (
          <div>Error: {error}</div>
        );
      }

      return (
        <><nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='addWine'>Add New Wine</Link>
            </li>
          </ul>
        </nav>
        <div id="wines-display">
            {getWine}
        </div>
        </>
      );
    }
  };


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