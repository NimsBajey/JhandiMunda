import React, {useState, useRef, useContext} from 'react'
import './index.css';

import One from '../assets/one.jpg';
import Two from '../assets/two.jpg';
import Three from '../assets/three.jpg';
import Four from '../assets/four.jpg';
import Five from '../assets/five.jpg';
import Zero from '../assets/six.jpg';

import dataContext from './StaterContext';

const Roll = ({a}) => {
  const [currentClass, setCurrentClass] = useState(null);
  const cubeRef = useRef(null);
  const data = useContext(dataContext)
//  console.log(`roll ko ho: ${data.dicer}`)
  function roll(){
    if(data.roll == true)
     setTimeout(()=> onRoll(), 500);
  }
   const  onRoll = ()=>  {  
   var showClass = 'show-' + (data.dicer[a] + 1);

    if (currentClass) {
      cubeRef.current.classList.remove(currentClass);
    }
    cubeRef.current.classList.add(showClass);
    setCurrentClass(showClass);
    
  };
  roll();
    
  return (
    <> 
  <div  className="scene">
   <div ref={cubeRef} className="cube">
    <div className="cube__face cube__face--1">
        <img className='' src={One} alt='dfs'/> 
    </div>
    <div className="cube__face cube__face--2">
        <img src={Two} alt='dfs'/> 
    </div>
    <div className="cube__face cube__face--3">
        <img src={Three} alt='dfs'/>
    </div>
    <div className="cube__face cube__face--4">
        <img src={Four} alt='dfs'/>
    </div>
    <div className="cube__face cube__face--5">
       <img src={Five} alt='dfs'/>
    </div>
    <div className="cube__face cube__face--6">
      <img src={Zero} alt='dfs'/>
    </div>
   </div>  
  </div>
    </>
  )
}
export default Roll
