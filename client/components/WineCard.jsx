/**
 * presentation component that renders a single wine card
 */
import React from 'react';



const WineCard = props => {
  const{key, wine} = props;
  return(
   <div className="wineCard">
    <h3><strong>Name: {wine.name}</strong></h3>
    <h3><strong>Name: {wine.wine_color}</strong></h3>
    <h3><strong>Name: {wine.varietal}</strong></h3>
    <h3><strong>Name: {wine.winery_location}</strong></h3>
    <h3><strong>Name: {wine.vintage_year}</strong></h3>
    <h3><strong>Name: {wine.price}</strong></h3>
    <h3><strong>Name: {wine.tasting_notes}</strong></h3>
    <button className = "delete-wine">Delete Wine</button>
  </div>
  );
};

export default WineCard;