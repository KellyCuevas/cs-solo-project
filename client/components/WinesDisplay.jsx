import React from 'react';
import WineCard from './WineCard.jsx';

const WinesDisplay = props => {
  console.log(props);
  const{wineList} = props;
  const wines = [];
  for(let i = 0; i < wineList.length; i++) {
    wines.push(<WineCard id={i} key={'wine' + i} wine={wineList[i]} />);
  }

  return(
    <div className="displayBox">
      <h4>Wines</h4>
      {wines}
    </div>
  );
};

export default WinesDisplay;