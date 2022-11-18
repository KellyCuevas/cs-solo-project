
/**
 * Root component
 */
import React from 'react';
import  { Route, Routes } from 'react-router-dom';
import  WinesDisplay  from './components/WinesDisplay';
import  NewWine  from './components/NewWine';
import  HomePage  from './components/HomePage';
import  Error from './components/Error';

const App = () => {
  return (
  <div>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/wines' element={<WinesDisplay />} />
      <Route path='/addWine' element={<NewWine />} />
      <Route path='*' element={<Error />} />
   </Routes>
  </div>
  );
};
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