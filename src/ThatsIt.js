import React from 'react'
import './ThatsIt.css'
import gsap from 'gsap'
import { useIntersection } from 'react-use'

const ThatsIt = () => {
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
    <div id='email' ref={sectionRef}>
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
