import React from 'react';
import { Component } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NewWine = () => {
  const [name, setName] = useState('');
  const [wine_color, setType] = useState('');
  const [varietal, setVarietal] = useState('');
  const [winery_location, setLocation] = useState('');
  const [vintage_year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [tasting_notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    console.log('this is handle submit');
    e.preventDefault();
    // setName('');
    // setType('');
    // setVarietal('');
    // setLocation('');
    // setYear('');
    // setPrice('');
    // setNotes('');

    const wine = { name, wine_color, varietal, winery_location, vintage_year, price,  tasting_notes };


    fetch('/wines', {
      method: 'POST',
      headers: {'Content-Type': 'Application/JSON' },
      body: JSON.stringify(wine)
    }).then(()=> {
      console.log('new wine added')
    })
      .catch(err => console.log('Create wine fetch error: ', err));
  };
  
  return (
    <><nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/wines'>View Wine List</Link>
        </li>
        <li>
          <Link to='/addWine'>Add New Wine</Link>
        </li>
      </ul>
    </nav><div className='addWine'>
        <h2>Add a New Wine to Your Collection!</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <label>Select the Wine Type</label>
            <select name='wine_color' id='wineColer' value={wine_color} onChange={(e) => setType(e.target.value)}>
              <option value='red'>Red</option>
              <option value='white'>White</option>
              <option value='rose'>Rosé</option>
              <option value='sparkling'>Sparkling</option>
              <option value='other'>Other</option>
            </select>
          </div>

          <div>
            <label>Varietal:</label>
            <input
              type='text'
              value={varietal}
              onChange={(e) => setVarietal(e.target.value)} />
          </div>

          <div>
            <label> Origin:</label>
            <input
              type='text'
              value={winery_location}
              onChange={(e) => setLocation(e.target.value)} />
          </div>

          <div>
            <label>Year:</label>
            <input
              type='text'
              value={vintage_year}
              onChange={(e) => setYear(e.target.value)} />
          </div>

          <div>
            <label>Price:</label>
            <input
              type='text'
              value={price}
              onChange={(e) => setPrice(e.target.value)} />
          </div>

          <div>
            <label> Tasting Notes:</label>
            <input
              type='text'
              value={tasting_notes}
              onChange={(e) => setNotes(e.target.value)} />
          </div>

          <div>
            <button type="button" className="submit" onClick={NewWine}>Save</button>
          </div>

        </form>
      </div></>
    )
  }

  export default NewWine
// class NewWine extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//      nameValue: 'i.e. Domaine St. Michelle',
//      typeValue: 'Red',
//      varietalValue: 'i.e. Pinot Noir',
//      locationValue: 'i.e. Paso Robles',
//      yearValue: 'i.e. 2010',
//      priceValue: 'i.e. $50',
//      tastingValue: 'i.e. light, semi-dry and fruity',
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
    
  
  

// }


