import React from 'react';
import { Link } from 'react-router-dom';
import WinesDisplay  from './components/WinesDisplay';
import  NewWine  from './components/NewWine';
import  HomePage  from './components/HomePage';

const HomePage = () => {
  return(
    <section>
    <h2>Welcome! What Would You Like to Do?</h2>
    <nav>
      <ul>
        <li>
          <Link to='/wines'>View Wine List</Link>
        </li>
        <li>
          <Link to='/addWine'>Add New Wine</Link>
        </li>
      </ul>
    </nav>
    </section>
  ) 
}

export default HomePage;