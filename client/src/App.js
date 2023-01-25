import React from 'react';
import { BrowserRouter, Route,  Routes} from "react-router-dom";
import './App.css';
//import Home from './Components/home/home.js'
import FirstLanding from './Components/firstLanding/firstLanding.js'

function App() {
  return (
      <BrowserRouter>  
    <Routes>
    <Route path='/' index element={<FirstLanding/>} />
<Route path='/home' element={<Home />} />
      <Route path='*' element={<>No match</>}></Route>
    </Routes>
  
      </BrowserRouter>
  );
}

export default App;
