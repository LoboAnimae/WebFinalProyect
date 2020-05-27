import React, { Component, useEffect } from 'react'
import './Header.css'
import gsap from 'gsap'
import { useIntersection } from 'react-use'

const Header = () => {
  const fadeIn = (element) => {
    gsap.to(element, 2, {
      opacity: 1,
      x: 50,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    })
  }
  fadeIn('.fadeIn')

  return (
    <div className='fadeIn'>
      <div id='navbar'>
        <div id='navWho'>
          <div id='textNav'>
            <a href='#whoAmI'>Who Am I?</a>
          </div>
        </div>
        <div id='navWhere'>
          <div id='textNav'>
            <a href='#whoAmI2'>What I Can Do</a>
          </div>
        </div>
        <div id='navRightNow'>
          <div id='textNav'>
            <a href='#whereIAmRightNow'>What I Have Done</a>
          </div>
        </div>
        <div id='navContact'>
          <div id='textNav'>
            <a href='#thatsIt'>Contact me!</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
