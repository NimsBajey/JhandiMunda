import React, {useState} from 'react'
import Logo from '../assets/logo.png';
import Baba from '../assets/baba.png'

import { NavLink, useParams, useNavigate} from 'react-router-dom';


const Head = () => {
  const id = useParams()
  const navigate = useNavigate()

  const [open, setOpen] = useState(false);
  const handleBalance = ()=>{
    navigate(`balance`)
  }
  return (
    <div className='w-full relative '>
      <header class="header top-0 bg-white shadow-md flex items-center justify-between px-8 py- w-full h-[50px]">
    <h1 class=" w-[600px] text-xl md:text-3xl font-bold">
        <a href="/">
          <span className='text-blue-500 md:px-2'>Jhandi</span>
          <span className='text-yellow-400 '>Munda</span>
          
        </a>
    </h1>

    <nav class="nav font-semibold text-lg hidden sm:block">
        <ul class="flex items-center">

        <li class="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
             <a href="/update  ">Update</a>
            </li>
  
           
            <li onClick={handleBalance} class="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
             Balance
            </li>
           
            <li class="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
              <a href="https://www.facebook.com/GuruCool001">Contact</a>
            </li>
            <li class="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
             <a href="/">Log Out</a>
            </li>
        </ul>
    </nav>


    <div className="flex flex-col justify-center  py-6 bg-gray-100 sm:py-12 md:hidden">
        <div className="relative py-3 mx-auto sm:max-w-xl">
          
            <button
              className="relative mb-4 text-gray-500 bg-white rounded-sm focus:outline-none"
              onClick={() => setOpen(!open)}>
          
              <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    open ? "rotate-45" : "-translate-y-1.5"
                  }`}></span>
                <span
                  aria-hidden="true"
                  className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
                    open && "opacity-0"
                  }`}></span>
                <span
                  aria-hidden="true"
                  className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                    open ? "-rotate-45" : "translate-y-1.5"
                  }`}></span>
              </div>
            </button>
                  
        </div>
      </div>

    <div className=" hidden lg:block">
        <a href="">
              Powered By GuruCool
        </a>  
    </div>
</header>

{/* <div className= {${open}? 'absolute bg-black/50 w-full h-screen z-10'}>..</div>   */}
<div className= {` ${open ? " absolute bg-black/70 w-full z-10 flex flex-col justify-start items-center duration-100 h-[1000px] pt-[130px]" : "absolute -top-[900px] duration-100"}`} >
<div className='-mt-[80px] font-semibold text-3xl mb-11 text-blue-500'>Jhandi Munda</div>
<nav class=" text-lg  z-10">

          
        <ul class="flex flex-col items-center font-bold text-white" onClick={()=> setOpen(!open)}>
        <li class="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
              <NavLink to='/'>Home</NavLink>
            </li>
            <li class="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active">
              <NavLink to="/update">Update</NavLink>
            </li>
            <li class="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
              <a onClick={handleBalance}> Balance</a>
            </li>
            <li class="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
            <a target='_blank' href="https://www.facebook.com/GuruCool001">Support Us</a>
            </li>
            <li class="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
              <NavLink to='/'>Log out</NavLink>
            </li>
        </ul>
    </nav>

    <div className='flex flex-col md:flex-col relative d:w-1/2 md:text-4xl z-0 '>
    <h1 className='absolute top-4 font-bold text-2xl md:text-5xl text-white md:mt-[100px] pl-3 '> Baba Plays <br/>
    <span className='absolute md:font-bold text-[15px] md:text-2xl  text-red-500 -mt-2'> #PlayWithGuruJii</span> </h1>
    <div className='md:mt-[100px] md:left-0 w-full h-[300px] z-0 md:w-auto md:h-[500px] md:pl-[200px] '>
    <img src={Baba}  alt='img'></img> 
    </div>
    </div>

</div>  

    </div>
  )
}

export default Head
