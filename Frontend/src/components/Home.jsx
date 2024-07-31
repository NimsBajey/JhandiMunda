import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Head from './Head'
import { NavLink } from 'react-router-dom'
import Back from '../assets/2.mp4'
import Baba from '../assets/baba.png'
import Log from '../assets/1.mp4'

import DiceBox from './DiceBox'
import Login from './Login'
import { playerIds } from './function'


const Home = () => {
  return (
    
    <div>
    <Login/>
     </div>
     
  )
}

export default Home
