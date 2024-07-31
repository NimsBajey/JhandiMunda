import { Routes,Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import DiceBox from './components/DiceBox'
import Home from './components/Home';
import Head from './components/Head';
import Login from './components/Login';
import Update from './components/Update';
import Register from './components/Register';
import Balance from './components/Balance';
import UpdatePlayer from './components/update/UpdatePlayer'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <div className='block'>
   
    
    <Routes>
     
      <Route path='/' element={<Login/>} /> 
      <Route path='player/:id' element={<DiceBox/>}/>  
      <Route path='player/:id/balance' element={<Balance/>}/>  
      <Route path='login' element={<Login/>} /> 
      <Route path='update' element={<Update/>} />
      <Route path='register' element={<Register/>} />
      <Route path='player/:id/update' element={<UpdatePlayer/>}/>

    </Routes>
    </div>

</BrowserRouter>   
   
    </>
  )
}

export default App
