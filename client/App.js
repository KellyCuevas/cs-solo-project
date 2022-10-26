
/**
 * Root component
 */
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import  WinesDisplay  from './components/WinesDisplay';
import  NewWine  from './components/NewWine';
import  HomePage  from './components/HomePage';

function App() {
  return (
    <>
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

export default App