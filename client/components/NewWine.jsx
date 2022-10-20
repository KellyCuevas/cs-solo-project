import React from 'react';
import { Component } from 'react';
 class NewWine extends Component {
  constructor(props) {
    super(props);
    this.state = {
     nameValue: 'i.e. Domaine St. Michelle',
     typeValue: 'Red',
     varietalValue: 'i.e. Pinot Noir',
     locationValue: 'i.e. Paso Robles',
     yearValue: 'i.e. 2010',
     priceValue: 'i.e. $50',
     tastingValue: 'i.e. light, semi-dry and fruity',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
    <div className='addWine'>
      <form onSubmit={this.handleSubmit}>
          <h2>Add a New Wine to Your Collection!</h2>
            <label>
              Name:
              <textarea value={this.state.nameValue} onChange={this.handleChange} />
            </label>
            <select>
              <option value='red'>Red</option>
              <option value='white'>White</option>
              <option value='rose'>Rosé</option>
              <option value='sparkling'>Sparkling</option>
              <option value='other'>Other</option>
            </select>
            <label>
              Varietal:
              <textarea value={this.state.varietalValue} onChange={this.handleChange} />
            </label>
            <label>
              Origin:
              <textarea value={this.state.locationValue} onChange={this.handleChange} />
            </label>
            <label>
              Year:
              <textarea value={this.state.yearValue} onChange={this.handleChange} />
            </label> 
            <label>
              Price:
              <textarea value={this.state.priceValue} onChange={this.handleChange} />
            </label> 
            <label>
              Tasting Notes:
              <textarea value={this.state.tastingValue} onChange={this.handleChange} />
            </label>

    </form>
  </div>
    )
  }
  
  

}


export default NewWine