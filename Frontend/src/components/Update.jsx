import React from 'react'
import Head from './Head'

const Update = () => {
  return (
    <div className='w-full overflow-hidden'>
     <Head/>
      <div className='flex flex-col justify-center items-center md:items-start h-[100%] mt-4 '> 
      {/* <h1 className='font-bold text-5xl text-black block'>JhandiMunda</h1> */}
      <div className='h-full w-[90%] flex-col'>

      
      

      <div className='w-full font-bold text-red-500 m-2 flex flex-col justify-center items-start'>
         <h2 className='   '> Future Versions:</h2>
         <ul className='list-disc list-inside m-4 text-justify decoration-solid'>
           <li>Login feature will be introduced.</li>
           <li>Multiplayer will be available.</li>
           <li>Ingame Sounds will also be added.</li>
           <li>🅝🅘🅜🅢 🅑🅐🅙🅔🅨</li>
         </ul>
      </div>  

      <div className='w-full m-2 flex flex-col justify-center items-start'>
         <h2 className='text-gray-500'> Version: 3.0.0</h2>
         <h3> Updates:</h3>
         <ul className='list-disc list-inside ml-4  text-justify decoration-solid'>
           <li>Login and register feature added </li>
           <li>Balance can directly be loaded from the balance section located in the menu</li>
           <li>Player Name and Id can be viewed in the bet section</li>
           <li>Bugs removed </li>
           <li>Errors Fixed</li>
           <li>Added Sound Effects</li>
           <li>Updated Date: Saturday 29<sup>th</sup>June, 2024</li>
         </ul>
      </div>  

      <div className='w-full m-2 flex flex-col justify-center items-start'>
         <h2 className='text-gray-500'> Version: 2.3.3</h2>
         <h3> Updates</h3>
         <ul className='list-disc list-inside m-4 text-justify decoration-solid'>
           <li>Login feature currently removed. </li>
           <li>Bugs fixed.</li>
           <li>Some new bugs added to fix later.</li>
           <li>Decreased the size of images for easy loading.</li>
           <li>Added Sound Effects</li>
           <li>Updated Date: 20th Feb, 2024</li>
         </ul>
      </div>  

      <div className='w-full m-2 flex flex-col justify-center items-start'>

         <h2 className='text-gray-500'> Version: 2.3.2</h2>
         <h3> Updates</h3>
         <ul className='list-disc list-inside m-4 text-justify decoration-solid'>
           <li>Home page has been updated to look more interesting.</li>
           <li>Little bugs due to CSS code has been fixed. </li>
           <li>Cash History has been introduced in the bet section</li>
           <li>Current bet section has been removed that was introduced in version 2.3.0</li>
           <li> Bet section has also been customized.</li>
           <li> Bugs fixed</li>
           <li>Updated Date: 14th Feb, 2024</li>   
         </ul>
      </div>  

      <div className='w-full m-2 flex flex-col justify-center items-start'>

         <h2 className='text-gray-500'> Version: 2.3.1</h2>
         <h3> Updates</h3>
         <ul className='list-disc list-inside m-4 text-justify decoration-solid'>
           <li> Cleared unnecessary codes (witespaces and not necessary functions)  </li>
           <li>Fixed bugs regarding the bet (before you couldn't place bets of the same amount that was left with you. )</li>
           <li>Used useContext hook instead of props drilling to pass data from parent to child component</li>
           <li>Updated Date: 10th Feb, 2024</li>
         </ul>
      </div>   

      
      <div className='w-full m-2 flex flex-col justify-center items-start'>

         <h2 className='text-gray-500'> Version: 2.3.0</h2>
         <h3> Updates</h3>
         <ul className='list-disc list-inside m-4 text-justify decoration-solid'>
            <li >Dice shape is fixed in mobile version as well.</li>
            <li>Now you can bet from 10$-1000$</li>
            <li>Betting can be done in six different values </li>
            <li>$10, $50, $100$, 250$, 500$ & 1000$ </li>
            <li>Login is still not available as the develpoer doesn't know how to do it</li>
            <li>You can see how much you are betting in the current bet section </li>
            <li>The width of Roll button has increased  </li>
         </ul>
      </div>   

      <div className='w-full m-2 flex flex-col justify-center items-start'>

         <h2 className='text-gray-500'> Version: 1.0 to 1.9</h2>
         <h3> Updates</h3>
         <p> The following changes are done in this update:</p>
         <ul className='list-disc list-inside m-4 text-justify decoration-solid'>
            <li>No any good updates were in this version, this was the first time i had an idea of dice app.</li>
            <li> However this version had sounds and video integrated</li>
            <li>Visit my github for more about this version..</li>
         </ul>
      </div>   

      </div>
      <h3 className='text-2xl font-semibold'> Thanks for visiting!</h3>

      </div>
    </div>
  )
}

export default Update
