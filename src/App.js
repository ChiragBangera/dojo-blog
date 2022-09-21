import React from 'react';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import {Route, Routes } from 'react-router-dom';
import Create from './components/blog/create';
import Blogdetails from './components/blog/details';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/:id' element={<Blogdetails/>}/>
          <Route path='/create' element={<Create />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
