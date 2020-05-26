import React from 'react'
import './WelcomeToMyLife.css'
import Arrow from './media/arrow.svg'

const WhoAmI = () => {
  return (
    <div>
      <div id='welcomeToMyLifeText'>Welcome to my life</div>
      <div id='secondWelcomeText'>From my heart to you</div>
      <div id='scrollDown'>
        <a href='#whoAmI'>Scroll Down</a>
      </div>
      <a href='#whoAmI'>
        <img id='scrollDownArrow' src={Arrow} alt='ScrollDownArrow' />
      </a>

      <script>
        {setTimeout(() => {
          document.getElementById('secondWelcomeText').style.cssText =
            'animation: heartbeat 1.75s; opacity: 100%; font-size: xx-large; animation-iteration-count: 2;'
        }, 3500)}

        {setTimeout(() => {
          document.getElementById('scrollDownArrow').style.cssText =
            'height: 24px; opacity: 100%; margin: 10px; animation: bob 2s; animation-iteration-count: 2'
        }, 12000)}
      </script>
    </div>
  )
}

export default WhoAmI
