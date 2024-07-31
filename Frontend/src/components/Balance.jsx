import React from 'react'
import Head from './Head'
import BalanceBox from './BalanceBox'
import {  useNavigate, useParams } from 'react-router-dom'

const Balance = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const turnBack = async()=>{
    navigate(`/player/${id}`)
  }
  return (
    <div>
      <Head/>
<div className="w-full flex flex-wrap justify-evenly mt-2 md:flex-col ">
  <h2 className='font-semibold text-xl text-center'> Load the required amount of balance</h2>
<BalanceBox value={100}/>
<BalanceBox value={250}/>
<BalanceBox value={500}/>
<BalanceBox value={750}/>
<BalanceBox value={950}/>
<BalanceBox value={1000}/>
<BalanceBox value={5000}/>


          <div className='w-full flex justify-center'>
          <a onClick={turnBack} className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  ">
            Back
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
             </svg>
          </a>
          </div>
</div>
    </div>
  )
}

export default Balance
