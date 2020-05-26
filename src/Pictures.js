import React from 'react'
import { useTransition, animated } from 'react-spring'
import useInterval from 'react-useinterval'
import './Pictures.css'
import pic1 from './media/arcanine.jpg'
import pic4 from './media/grovyle.jpg'
import pic3 from './media/Lucario.png'
import pic2 from './media/Pikachu.png'

const slides = [
  {
    id: 0,
    url: pic1,
  },
  {
    id: 1,
    url: pic2,
  },
  {
    id: 2,
    url: pic3,
  },
  {
    id: 3,
    url: pic4,
  },
]

const Pictures = () => {
  const [index, setIndex] = React.useState(0)
  const increment = () => {
    if (index === 3) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const item = slides[index]
  useInterval(increment, 2000)

  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0, transform: 'scale(1.1)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.9)' },
  })

  return transitions.map(({ item, props, key }) => {
    return (
      <animated.div
        key={key}
        className='bg'
        style={{
          backgroundImage: `url(${item.url})`,
          ...props,
        }}
      ></animated.div>
    )
  })
}

export default Pictures
