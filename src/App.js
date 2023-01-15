import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Users from './Pages/Users';
import Profile from './Pages/Profile';
import Error from './Pages/Error';
import NavBars from './Components/NavBars';



function App() {
  return (
    <div className="App">
      <NavBars/>
      <h1>Workshop API</h1>
      <Routes>
        <Route path ='/' element ={<Home/>}></Route>
        <Route path ='/users' element ={<Users/>}></Route>
        <Route path ='/user/:id' element ={<Profile/>}></Route>
        <Route path ='/*' element ={<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
