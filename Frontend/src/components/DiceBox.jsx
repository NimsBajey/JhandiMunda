import React, { useState, useEffect } from 'react';
import Back from '../assets/back.jpg';
import Roll from './Roll';
import Bbox from './Bbox';
import DataContext from './StaterContext';
import Rol from '../assets/sounds.wav';
import useSound from 'use-sound';
import Head from './Head';
import axios from 'axios';

import {  useNavigate, useParams } from 'react-router-dom';
import { FiVolumeX, FiVolume1 } from "react-icons/fi";


import { getRandomInt } from './function';


const DiceBox = (props) => {
  const navigate = useNavigate()
  const {id} = useParams()

  const [player,setPlayer] = useState({
    name : '',
    playerId : '',
    password : '',
    email : '',
    balance : null,
    profileImg : ""
  })


  const onLoad = async()=>{
  
     const res = await axios.get(`http://localhost:3000/player/${id}`)
   

     if(res.status == 200){
      setAmt(res.data.data.balance)
      setPlayer(res.data.data)
      console.log(player)
     }
  }

  useEffect(()=>{
    onLoad()
  }, [])

  const [pl] = useSound(Rol , {
    sprite: {
      ting : [0,900],
      whosh : [1000 , 2000]
    },  
  });
  

    const [muted , setMuted] = useState(false);
    const [counts, setCounts] = useState([0,0,0,0,0,0]); 
    const[bethis, setBetHis] = useState([0,0,0,0,0,0]); 
    const [recWin,setRecWin] = useState(0);
    const [recLost,setRecLost] = useState(0);
    const [roll,setRoll] = useState(false);
    const [amt, setAmt] = useState(0);  // the total bet amount
    const [dice, setDice] = useState([0,0,0,0,0,0]);
    const [recBet, setRecBet] = useState(100); // the amount of bet for betting
    let diceD = Array(6).fill(0);  
    const [items, setItems] = useState([1,1,1,1,1,1
      // getRandomInt(0, 6),
      // getRandomInt(0, 6),
      // getRandomInt(0, 6),
      // getRandomInt(0, 6),
      // getRandomInt(0, 6),
      // getRandomInt(0, 6),
    ]); 
    const [dicer, setDicer] = useState([0,0,0,0,0,0]);
    
    
    const mute = ()=> {
      if(muted == true)
          setMuted(false);
        else
          setMuted(true);

          console.log(muted);
    }
  
    const addItem = (index)=> {

      if (amt != 0 && amt >= recBet){
      setCounts((prevArray) => {
      const newArray = [...prevArray]; 
      newArray[index] += recBet; 
      setCounts(newArray);

      let bet = 0;
        for(let i = 0; i < counts.length; i++){
           bet+= counts[i];
        }
        var Amount = amt - recBet;
        setAmt(Amount);
      return(newArray);  
     }); 
    }
     else{
      alert("Moe moe, low balance");
     }
     pl({id: 'ting'});
    }

    const subItem = (index)=> {
        setCounts((prevArray) => 
        { 
          const newArray = [...prevArray]; 
 
            if(newArray[index] != 0 && newArray[index] >= recBet)
            { 
              newArray[index] -= recBet;  //subtracts from the bet amount
              setCounts(newArray);
              var Amount = amt  + recBet;
            // pl({id: 'ting'});

            }
            else
             var Amount = amt;
          setAmt(Amount);
          return(newArray);  
        })
      
      }


      // this code is for the mute bottom which is not working..
    useEffect(()=> {
      if(muted === true)
      stop(pl);
    }, [muted])

    const moneyLoad = async()=>{
      

 
      if(amt == 0){

        return
      }else{

        const res = await axios.patch(`http://localhost:3000/player/${id}`, {balance : amt} )

      }
    
     }
         
    useEffect(()=> {
      setRoll(false);
      setRecBet(recBet);
      setDicer(items);
     }, [counts]);
     let a = 10;

     useEffect(()=>{
      moneyLoad()
     })




   //for generating dice faces 
    function rollIt(){   
      // pl({id: 'whosh'});

      setItems([
        getRandomInt(0, 6), 
        getRandomInt(0, 6),
        getRandomInt(0, 6),
        getRandomInt(0, 6),
        getRandomInt(0, 6),
        getRandomInt(0, 6),
      ]);  
     setBetHis(counts);
      setRoll(true);

      
      const hell = ()=> {
    //the below code is for calculating the result only.
     var win = 0 , winAmt = 0, losAmt = 0, loss = 0,totAmt = 0;

  // this for loop counts the number of occurence of elements from 0 to 5 (i.e index) in dice.
      for(let i = 0; i < items.length; i++){
        const num = items[i];
        diceD[num]++;
      }
      setDice(diceD);
   
  // the below code is for calculating the cash after wining only.
      for(let i = 0; i < diceD.length; i++){
        if (diceD[i] != 0 && diceD[i] != 1) {
          win = (counts[i] * diceD[i]);
          loss = 0;
        } else{
          loss =  counts[i];
          win = 0;
        }
        winAmt += win; 
        losAmt += loss; 
        totAmt = winAmt ;
        totAmt = totAmt + amt * 1;
       
        setRecWin(winAmt);
        setRecLost(losAmt);
        setAmt(totAmt);
        
     
      }      
  }
  setTimeout(()=> setRoll(false), 200)
    setTimeout(()=> hell(),2000)
    setCounts([0,0,0,0,0,0]);   

    
  }
  return (
    <DataContext.Provider value={{player, items,bethis, amt,dicer, recLost, recBet, setRecBet, subItem, addItem , counts, recWin,roll,dice}}>
    {props.children}
    <Head/> 
    <img src={Back} className='absolute h-screen'/>
    <div className=' w-full h-[100%] md:mt-[100px]'>
     <div className=' relative flex flex-col-reverse lg:flex-row justify-center items-center h-[100%] '> 
     
  <div className='flex justify-center items-center w-full md:w-1/2  '>
     <Bbox/>
  </div>     
  <ul className='grid grid-cols-3 w-[200px] md:w-1/2 md:-mb-6 -pb-8 '>
     {dicer.map((item, index) => (
        <Roll key={index} st={roll} a={index}/>
      ))}
  </ul>
  {/* <div className='w-full flex justify-start items-start' ><FiVolumeX className='text-2xl'/></div> */}
     
  </div>
     <div className='w-full flex justify-center items-center'>
     <button onClick={()=> rollIt() } className="rollBtn absolute bottom-0 w-[90%] h-[30px] text-white hover:text-white-500 bg-blue-500 hover:bg-black rounded  hover:bg-black/50 border hover:border-blue-500 duration-200 mb-2">Roll</button>
     </div>
    </div> 

    </DataContext.Provider>

  )
}
export default DiceBox