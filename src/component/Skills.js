import React from 'react'
import './Style/skills.css'
import imgJS from './image/JS.png' 


export const Skills = () => {
  return (
    <div className='skills'>
      <div className='heading'>
        <h1>Skills</h1>
        </div>
      <span className='content'>
        <div className='box'>
          <div className='img-container'>
            <img className='img' src={imgJS}/>JavaScript
            <img className='img' src={imgJS}/>JavaScript
            <img className='img' src={imgJS}/>JavaScript
          </div>

        </div>

      </span>
      
    </div>
  )
}

