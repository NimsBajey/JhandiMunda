import React, {useState, useContext, useEffect} from 'react';
import Dbox from './Dbox';

//importing images for cardbox i.e cbox
import Zero  from '../assets/one.jpg';
import One from '../assets/two.jpg';
import Two from '../assets/three.jpg';
import Three from '../assets/four.jpg';
import Four from '../assets/five.jpg';
import Five from '../assets/six.jpg';
import dataContext from './StaterContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Cbox = () => {
  
  const onLoad = async()=>{
     const id = useParams()
     const res = await axios.get(`http://localhost:3000/player/${id}`)
   

     if(res.status == 200){
      console.log(res.data.data)
      setPlayer(res.data.data)
     }
  }


  useEffect(()=>{
    onLoad()
  }, [])

      const [beter, setBet] = useState([0,0,0,0,0,0 ]);
      const data = useContext(dataContext);
      const [isVisible, setIsVisible] = useState(false); 


      useEffect(()=> {
        setBet(data.counts)
      }, [beter])
   
      const betOpener = () => {
            if(isVisible)
              {setIsVisible(false)}
            else
              {setIsVisible(true);}  
        }
      
        const [activeButton, setActiveButton] = useState(null); // Store active button ID

        const handleClick = (buttonId) => {
          setActiveButton(buttonId);
        };

   
   const faces = ["सुरत", "ई्टा", "जन्डि", "मुन्दा", 'चिडि','पाना'];
  return (
  <div className='bg-white border rounded-sm' >
    <section className='grid grid-cols-3 gap-3 justify-items-center py-2'>
      <Dbox img={Zero} isVisible={isVisible} id={"0"}/>
      <Dbox img={One} isVisible={isVisible} id={"1"}/>
      <Dbox img={Two} isVisible={isVisible} id={"2"}/>
      <Dbox img={Three} isVisible={isVisible} id={"3"}/>
      <Dbox img={Four} isVisible={isVisible} id={"4"}/>
      <Dbox img={Five} isVisible={isVisible} id={"5"}/>
    </section>  

    <hr className='border-black ml-6 w-[80%]'/>

  <div className='grid-cols-2 flex flex-row justify-center items-center w-full text-2xl  '>
  {/* <hr className='border-black ml-6 w-[80%] absolute'/> */}
  
    <div className='gap-1 flex text-xl font-bold z-0'>
      <button onClick={()=> {data.setRecBet(10); handleClick(1);}} className={`${activeButton === 1 ? 'bg-red-500' : 'bg-blue-500'} rounded-full text-white flex justify-center items-center w-7 h-auto text-[14px]`}>10</button>
      <button onClick={()=> {data.setRecBet(50); handleClick(2);}} className={`${activeButton === 2 ? 'bg-red-500' : 'bg-blue-500'} rounded-full text-white flex justify-center items-center w-7 h-auto text-[14px]`}>50</button>
      <button onClick={()=> {data.setRecBet(100); handleClick(3);}} className={`${activeButton === 3 ? 'bg-red-500' : 'bg-blue-500'} rounded-full text-white flex justify-center items-center w-7 h-auto text-[14px]`}>100</button>

    </div>
  

  <button id='myButton' onClick={() => betOpener()} className={`${isVisible ? 'bg-red-500' : 'bg-blue-500'} z-0 text-white  bg-blue-500 rounded w-[50px] duration-200 m-2`}> BET</button>
    <div className='gap-1 flex text-xl font-bold z-0'>
    <button onClick={()=> {data.setRecBet(250); handleClick(4);}} className={`${activeButton === 4 ? 'bg-red-500' : 'bg-blue-500'} rounded-full text-white flex justify-center items-center w-7 h-auto text-[14px]`}>250</button>
    <button onClick={()=> {data.setRecBet(500); handleClick(5);}} className={`${activeButton === 5 ? 'bg-red-500' : 'bg-blue-500'} rounded-full text-white flex justify-center items-center w-7 h-auto text-[14px]`}>500</button>
    <button onClick={()=> {data.setRecBet(1000); handleClick(6);}} className={`${activeButton === 6 ? 'bg-red-500' : 'bg-blue-500'} rounded-full text-white flex justify-center items-center w-7 h-auto text-[14px]`}>1k</button>
    </div> 
  </div>

  <hr className='border-black ml-6 w-[80%]'/>
 <div className='flex flex-col justify-center items-center'>
   <h2 className='mt-[2px]'>Cash History</h2>
   <div className='h-[80px]'>
      <div className='flex flex-col grid-col-2 w-[250px]'>
      <div className='flex space-evenly  text-[13px] w-full  '>
        <span className='w-1/2 ml-6'> {faces[0]} X { data.dice[0]} X {data.bethis[0]}</span>    
        <span className='w-1/2'> {faces[3]} X {data.dice[3]} X {data.bethis[3]}</span>    
      </div> 
      <div className='flex space-evenly  m-[2px] text-[13px] w-full'>   
        <span className='w-1/2 ml-6'> {faces[1]} X {data.dice[1]} X {data.bethis[1]}</span>    
        <span className='w-1/2'> {faces[4]} X {data.dice[4]} X  {data.bethis[4]}</span>    
      </div> 
      <div className='flex space-evenly m-[2px] text-[13px] w-full'>   
        <span className='w-1/2 ml-6'> {faces[2]} X {data.dice[2]} X {data.bethis[2]} </span>    
        <span className='w-1/2 '> {faces[5]} X {data.dice[5]} X {data.bethis[5]}</span>    
      </div>
      </div>
   </div>
 </div>
 <hr className='border-black'/>

  <div className='text-black flex flex-col justify-center items-center  '>
      <span >Amount: {`${data.amt}$`}</span>
      <div className='flex gap-5 text-[15px]'>
      <span className='text-green-500'>Recent Win:{`${data.recWin}$`}</span>
      <span className='text-red-500'>Recent Lost:{`${data.recLost}$`}</span>
      </div>
  </div>

  </div>

  )   
}

export default Cbox