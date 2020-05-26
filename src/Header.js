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
            <a href='#whoAmIText'>Who Am I?</a>
          </div>
        </div>
        <div id='navWhere'>
          <div id='textNav'>
            <a href='#textNav'>The Beginnings</a>
          </div>
        </div>
        <div id='navGrow'>
          <div id='textNav'>Growing Up</div>
        </div>
        <div id='navEnd'>
          <div id='textNav'>Where Did I End Up</div>
        </div>
        <div id='navRightNow'>
          <div id='textNav'>Where I am Right Now</div>
        </div>
        <div id='navContact'>
          <div id='textNav'>Where to Find Me</div>
        </div>
      </div>
    </div>
  )
}

export default Header
