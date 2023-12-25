import React from 'react';
import Home from './Home';
import About from './About';
import { Routes,Route } from 'react-router-dom';
const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    </>
  )
}

export default Routing;