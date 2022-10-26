/**
 * presentation component that renders a single wine card
 */
import React from 'react';



const WineCard = props => {
  const{key, wine} = props;
  return(
   <div className="wine-card">
    <h3 className="card-details"><strong>Name: </strong>{wine.name}</h3>
    <h3 className="card-details"><strong>Type: </strong>{wine.wine_color}</h3>
    <h3 className="card-details"><strong>Varietal: </strong>{wine.varietal}</h3>
    <h3 className="card-details"><strong>Origin: </strong>{wine.winery_location}</h3>
    <h3 className="card-details"><strong>Vintage Year: </strong>{wine.vintage_year}</h3>
    <h3 className="card-details"><strong>Price: </strong>{wine.price}</h3>
    <h3 className="card-details"><strong>Tasting Notes: </strong>{wine.tasting_notes}</h3>
    <button className = "delete-wine">Delete Wine</button>
  </div>
  );
};

export default WineCard;