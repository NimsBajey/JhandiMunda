import React, {useContext, useState, useEffect} from 'react'
import Cbox from './Cbox'
import Login from './Login'
import dataContext from './StaterContext';
import Profile from '../assets/Baba.png'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Bbox = () => {
  // const [player,setPlayer] = useState([])
  const {id} = useParams()


  const data = useContext(dataContext);
  const onLoad = async()=>{
     const res = await axios.get(`http://localhost:3000/player/${id}`)
   

     if(res.status == 200){
      setPlayer(res.data.data)
     }
  }


  useEffect(()=>{
    onLoad()
  }, [])
  return (

    <div className=' w-[250px] md:w-[280px] border rounded-md relative bg-white'>
      <div className='w-full flex flex-col justify-center  items-center  mt-2 '>
      {/* <h1 className='text-lg font-bold text-black'>Bet Box</h1> */}
      <div className='w-full flex justify-start items-center '>
        <div className='h-[50px] w-[80px] flex justify-center items-center '>
           <img className='h-full w-auto object-cover border border-black' src={data.player.profileImg}></img>
         </div>

        <div className='w-[180px] pl-1 flex flex-col pt-2'>
        <h1 className='text-sm font-bold text-black'>{`${data.player.name}`}</h1>
        <h4 className='text-sm text-black pb-2 font-semibold'>ID: {data.player.playerId}</h4>
        </div>
      </div>


         <div className='w-full'> 
        {/* <h4 className='text-[12px] text-black pb-4'>Current bet : {data.recBet}$</h4> */}
            <Cbox />

         </div>
      </div>
    </div>
  )
}

export default Bbox
