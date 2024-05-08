import React from 'react'
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useGlobalContext } from './context';
const ToggleContainer = () => {
   const {isDarkTheme, ToggleBtn} = useGlobalContext();
   console.log(isDarkTheme)
  return (
    <section className='toggle-container'>
    <button className="dark-toggle" onClick={ToggleBtn}>
    {isDarkTheme ? (
        <BsFillMoonFill className='toggle--icon'/>
    ) : (
        <BsFillSunFill className='toggle-icon'/>
    )}
    </button>
    
     
     
    </section>

  )
}

export default ToggleContainer
