import React, {useContext} from 'react'
import dataContext from './StaterContext';


const Dbox = (props) => {
  const data = useContext(dataContext);
  return (
    <div>
       <div className='relative w-[50px] h-[40px] flex-col mb-8'>
        <img className='border rounded-lg w-full' src={props.img}></img>
          <div className={props.isVisible ? "top-0 w-full absolute flex flex-col justify-center items-center text-white border border-blue-500  ": 'hidden '}>
              <button onClick={()=> data.addItem(props.id, data.recBet)} className='w-full h-[50%] bg-white/70 text-green-600 font-bold hover:scale-110 duration-200'>+</button>
                 <hr className='border border-white w-[100%]'/>
              <button onClick={()=> data.subItem(props.id,data.recBet)} className='w-full h-[50%] bg-white/70 text-red-600 font-bold hover:scale-110 duration-200'>-</button>
          </div>
          <div className='flex justify-center items-center '>
            <span className="text-green-500">
             {`${data.counts[props.id]}$`}
            </span>
          </div>
        </div>      
    </div>
  )
}

export default Dbox
