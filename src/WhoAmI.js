import React, { Component, useEffect } from 'react'
import './WhoAmI.css'
import gsap from 'gsap'
import { useIntersection } from 'react-use'
import UVGLogo from './media/uvg.jpg'
import picture from './media/antigua.jpg'

function WhoAmI() {
  const sectionRef = React.useRef(null)
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  })
  const fadeIn = (element) => {
    gsap.to(sectionRef.current, 2, {
      opacity: 1,
      y: -50,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    })
  }

  const fadeOut = (element) => {
    gsap.to(sectionRef.current, 2, {
      opacity: 0,
      y: 50,
      ease: 'power4.out',
    })
  }
  intersection && intersection.intersectionRatio < 0.5
    ? fadeOut('.fadeIn')
    : fadeIn('.fadeIn')

  return (
    <div>
      <div ref={sectionRef} className='fadeIn'>
        <div id='whoAmIText'>
          I am Andrés Quan-Littow. I am a Computer Science student
        </div>
        <div id='whoAmIText2'>
          <div>at</div>{' '}
          <div className='container'>
            <div id='firstText'>the Universidad del</div>
            <div id='secondText'>&nbsp;Valle de Guatemala.</div>
          </div>
        </div>
        <div id='imageWho'>
          <img src={UVGLogo} alt='logoUVG' />
        </div>
        <img id='antigua' src={picture} alt='antigua' />
      </div>
    </div>
  )
}

export default WhoAmI
