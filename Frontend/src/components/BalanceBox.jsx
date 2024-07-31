import axios from 'axios';
import React from 'react'
import { useParams , useNavigate} from 'react-router-dom';

const BalanceBox = ({value}) => {
  const {id} = useParams()
  const navigate = useNavigate()


    const balance = value;

    const loadBalance = async()=>{
      const res = axios.patch(`http://localhost:3000/player/${id}/balance`,{balance : balance})
      navigate(`/player/${id}`)
      alert("Balance Added")
    }
  return (
    <div className='m-2 min-w-[350px]'>
     <div className="flex max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:min-w-full">
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white w-1/2">{value}$</h5>
          <div className='w-1/2 flex justify-end'>
          <a onClick={loadBalance} href="#" className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  ">
            Load
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
             </svg>
          </a>
          </div>
      </div>
    </div>
  )
}

export default BalanceBox
