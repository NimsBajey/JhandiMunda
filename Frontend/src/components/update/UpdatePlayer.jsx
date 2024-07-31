import React, {useState, useEffect, createContext} from 'react'
import { useNavigate , useParams} from 'react-router-dom';



import axios from 'axios';
import Head from '../Head';



const UpdatePlayer = () => {

    const navigate = useNavigate()
    const [profileImg, setProfileImg] = useState(null)
    const [data, setData] = useState({
      playerId : '',
      email: '',
      password :'',
      name: ''
    })

  
  const [player, setPlayer] = useState([])
  const {id} = useParams()

  const handleChange = (e)=>{
    const {name , value} = e.target
    setData({
      ...data, 
      [name] : value
    })
}
   const handleSubmit = async(e)=>{
    
    e.preventDefault()
    const formData = new FormData()

    Object.entries(data).forEach(([key,value])=>{
      formData.append(key,value)
    })
    formData.append('profileImg', profileImg)

     const res = await axios.patch(`http://localhost:3000/player/${id}/update`, formData )
    
  if(res.status === 200){
    navigate("/")
  }else{
    alert("Couldn't Registered");
  }
   }


  return (  
    <div className='h-[500px] overflow-hidden'>
    <Head/>

    <div className='w-full flex  bg-red-500  overflow-hidden '>
    
    
    <div className="flex w-full h-[100%] bg-white flex-col md:flex-row absolute ">
      <div className="container mx-auto h-screen mt-2  md:w-1/2">

      
        <div className="max-w-md mx-auto">  
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-700 dark:text-black ">
          Update
            </h1>
            <div className='h-[200px] md:hidden'>
                {/* <img className='h-[200px] object-contain' src={Baba}/> */}
            </div>

            <p className="text-gray-500 dark:text-gray-400">
        
            </p>
          </div>

          <div className="m-7">
            <form onSubmit={handleSubmit} >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                 Name 
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nirmal"
                  onChange={handleChange}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>

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
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                 Email
                </label>

                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="nims22@gmail.com "
                  onChange={handleChange}
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
          

            <div>
                <label class="block text-sm font-medium text-white">
                Book Image
              </label>
              <div class="mt-1 bg-indigo-500 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label htmlFor="profileImg" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span class="">Upload a file</span>
                      <input onChange={(e)=> setProfileImg(e.target.files[0])} id="profileImg" name="profileImg" type="file" class="sr-only"/>
                    </label>
                    <p class="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p class="text-xs text-white">
                    PNG, JPG, GIF up to 2MB
                  </p>
                </div>
              </div>
            </div>
             
                <button
                  type="submit"
                  // onClick={()=> handleLogin()}
                  className="mt-4 w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                  Update
                </button>
      
          

            </form>
              
              
          </div>
        </div>
      </div>   

   
    </div>
  </div>
  
    
  </div>
  )
}

export default UpdatePlayer
