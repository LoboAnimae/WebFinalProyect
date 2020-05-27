import React from 'react'
import './ThatsIt.css'

const ThatsIt = () => {
  return (
    <div id='email'>
      <div id='endText'>That's About It...</div>
      <a href='emailto:andyquan12@gmail.com?subject = Feedback&body = Message'>
        <div id='button'>
          <div id='buttonText'>Email Me!</div>
        </div>
      </a>
    </div>
  )
}

export default ThatsIt
