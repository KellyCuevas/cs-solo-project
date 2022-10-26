
/**
 * Root component
 */
import React from 'react';
import  { Route, Routes } from 'react-router-dom';
import  WinesDisplay  from './components/WinesDisplay.jsx';
import  NewWine  from './components/NewWine.jsx';
import  HomePage  from './components/HomePage.jsx';
import  Error from './components/Error.jsx';

function App() {
  return (
    
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/wines' element={<WinesDisplay />} />
    <Route path='/addWine' element={<NewWine />} />
    <Route path='*' element={<Error />} />
  </Routes>
    

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