import React, { Component } from 'react'
import './WhereIAmRightNow.css'
import ImageCarousel from './ImageCarousel'
import gsap from 'gsap'
import { useIntersection } from 'react-use'

const MyProjects = () => {
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
    ? fadeOut('#title')
    : fadeIn('#title')

  const links = [
    {
      id: 0,
      url: 'http://quetzaluno.space/17652/Lab_2/Story/starter.html',
    },
    {
      id: 1,
      url: 'http://quetzaluno.space/17652/Helvette.html',
    },
    {
      id: 2,
      url: 'http://quetzaluno.space/17652/lab_5.html',
    },
    {
      id: 3,
      url: 'http://quetzaluno.space/17652/Lab_6/dist/index.html',
    },
    {
      id: 4,
      url: 'http://quetzaluno.space/17652/Lab_7/dist/index.html',
    },
  ]

  return (
    <div id='myProjects'>
      <div id='decoration'></div>
      <div id='title' ref={sectionRef}>
        Check out some of my work!
      </div>
      <div id='internalNavBar' ref={sectionRef}>
        <div id='story'>
          <a href={links[0].url}>Read a small HTML story!</a>
        </div>
        <div id='chat'>
          <a href={links[1].url}>Chat with others!</a>
        </div>
        <div id='art'>
          <a href={links[2].url}>Admire some CSS art!</a>
        </div>
        <div id='memory'>
          <a href={links[3].url}>Play some memory!</a>
        </div>
        <div id='maze'>
          <a href={links[4].url}>Solve a Pokémon maze!</a>
        </div>
      </div>
      <div id='outerContainer'>
        <div id='carousel' ref={sectionRef}>
          <ImageCarousel />
        </div>
      </div>
    </div>
  )
}

export default MyProjects
