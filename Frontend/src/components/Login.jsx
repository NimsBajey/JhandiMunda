import React, {useState, useEffect, createContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Baba from '../assets/baba.png'
import axios from 'axios';
// import Back from '../assets/back.jpg'
// import So from '../assets/Money.wav'

import Head from './Head';  
import Register from './Register';


const Login = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    playerId : ' ', 
    password : ' '
  })
  const [player, setPlayer] = useState([])
  const handleChange = (e)=>{
    // formData.append(e.target.name , e.target.value)
    const {name , value} = e.target
    setData({
      ...data, 
      [name] : value
    })
   
}
   const handleLogin = async(e)=>{
    e.preventDefault()
        const formData = new FormData();
        Object.entries(data).forEach(([key,value])=>{
          formData.append(key,value)
        })
        const res = await axios.post('http://localhost:3000/login', {
          playerId : data.playerId , 
          password : data.password
        })
        if(res.status == 200){
          setPlayer(res.data.data)
          navigate(`player/${res.data.data}`)
          
         }else{
          alert('Wrong Data');
         }
   }




  // const [play] = useSound(Roll);
  return (  
    <div className='h-[500px] overflow-hidden'>
    <Head/>
      {/* <img className='absolute h-screen z-0' src={Back}></img>   */}
    <div className='w-full flex  bg-red-500  overflow-hidden '>
    
    <div className="flex w-full h-[100%] bg-white flex-col md:flex-row absolute ">
      <div className="container mx-auto h-screen mt-2 md:mt-20 md:w-1/2">
        <div className="max-w-md mx-auto">  
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-700 dark:text-black">
              Log in
            </h1>

            <p className="text-gray-500 dark:text-gray-400">
             Press login to start the game
            </p>
          </div>

          <div className="m-7">
            <form onSubmit={handleLogin} >
              <div className="mb-6">
                <label
                  htmlFor="playerId"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                 Player ID
                </label>

                <input
                  type="text"
                  name="playerId"
                  id="playerId"
                  placeholder="Nims2044"
                  onChange={handleChange}
                  // onChange={(e)=> setPlayerName(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="text-sm text-gray-600 dark:text-gray-400">
                    Password
                  </label>

                  <a
                    href="#!"
                    className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div>

                <input
                  name="password"
                  id="password"
                  onChange={handleChange}
                  placeholder="******"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
            <div className="mb-6">
             
                <button
                  type="submit"
                  // onClick={()=> handleLogin()}
                  className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                  Log in
                </button>
      
          </div>

            </form>
              
              <p className="text-sm text-center text-gray-400 -mt-3">
                Don't have an account yet?{" "}
                <Link to='/register'>
                <span className='text-blue-500 font-semibold'>
                 Register Now
                 </span>
                </Link>
                .
              </p>
          </div>
        </div>
      </div>   

    <div className='flex flex-col md:flex-col relative d:w-1/2 md:text-4xl -mt-[470px] md:mt-0  h-auto'>
    <h1 className='absolute top-4 font-bold text-2xl md:text-5xl text-blue-500 md:mt-[100px] pl-3 '> Baba Plays <br/>
    <span className='absolute md:font-bold text-[15px] md:text-2xl  text-red-500 -mt-2'> #PlayWithGuruJii</span> </h1>
    <div className='md:mt-[100px] md:left-0 w-full h-[290px] z-0 md:w-auto md:h-[500px] md:pl-[200px]'>
    <img src={Baba}  alt='img'></img> 
    </div>
    </div>
    </div>
  
  </div>
  </div>
  )
}

export default Login
