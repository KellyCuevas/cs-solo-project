
/**
 * Root component
 */
import React, { Component } from 'react';
import {Route, Routes} from 'react-router-dom';
import { render } from 'react-dom';
import WinesDisplay from './components/WinesDisplay.jsx';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/wines'>Wine List</Link>
        </li>
        <li>
          <Link to='/addWine'>Add New Wine</Link>
        </li>
      </ul>
    </nav>
      <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/wines' element={<WinesDisplay />} />
    <Route path='/addWine' element={<NewWine />} />
  </Routes>
    </>

  )
}
// class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return(
//       <div>
       
//         <WinesDisplay />
//       </div>
//     );
//   }
// };

export default App;