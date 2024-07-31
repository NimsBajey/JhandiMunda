import React, {useState, createContext} from 'react'
import { NavLink } from 'react-router-dom';


import Baba from '../assets/baba.png'


import Back from '../assets/back.jpg'
import So from '../assets/Money.wav'

import Head from './Head';  

const Login = () => {

  // const [play] = useSound(Roll);
  return (
    <div>
    <Head/>
      {/* <img className='absolute h-screen z-0' src={Back}></img>   */}
    <div className='w-full flex justify-center '>
    
    <div className="flex w-full h-[100%] bg-white flex-col md:flex-row absolute ">
      <div className="container mx-auto md:w-1/2">
        <div className="max-w-md mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-700 dark:text-black">
              Log in
            </h1>

            <p className="text-gray-500 dark:text-gray-400">
             Press login to start the game
            </p>
          </div>

          <div className="m-7">
            <form >
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                 Player Name
                </label>

                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Nirmal"
                  // onChange={(e)=> props.setPlayerName(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="text-sm text-gray-600 dark:text-gray-400">
                    Player ID 
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
                  placeholder="Nims****"
                  // onChange={(e) => props.setUserId(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
            </form>
            <div className="mb-6">
            <NavLink to="/play">
                <button
                  type="button"
                  // onClick={()=> handleLogin()}
                  className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                  Log in
                </button>
            </NavLink>    
              </div>
              <p className="text-sm text-center text-gray-400">
                Don't have an account yet?{" "}
                <a
                  href="https://www.facebook.com/nishan.basnet.33449"
                  className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">
                 Ring me
                </a>
                .
              </p>
          </div>
        </div>
      </div>   
    <div className='flex flex-col md:flex-col relative d:w-1/2 md:text-4xl   '>
    <h1 className='absolute top-4 font-bold text-2xl md:text-5xl text-blue-500 md:mt-[100px] pl-3 '> Baba Plays <br/>
    <span className='absolute md:font-bold text-[15px] md:text-2xl  text-red-500 -mt-2'> #PlayWithGuruJii</span> </h1>
    <div className='md:mt-[100px] md:left-0 w-full h-[290px] z-0 md:w-auto md:h-[500px] md:pl-[200px] mt-'>
    <img src={Baba}  alt='img'></img> 
    </div>
    </div>
   
  
 
    </div>
  
   

  </div>
  </div>
  )
}

export default Login
