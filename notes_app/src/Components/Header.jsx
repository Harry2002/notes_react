import React from 'react'

export default function Header({handleDarkMode}) {
  return (
    <>
    <div className='header'>
    <h1>Notes-App</h1>
    <button className='save' onClick={()=>handleDarkMode((prev)=>!prev)}>Switch</button>
    </div>
    </>
  )
}
