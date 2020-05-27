import React from 'react'
import { useTransition, animated } from 'react-spring'
import useInterval from 'react-useinterval'
import './Pictures.css'
import pic1 from './media/python.png'
import pic4 from './media/laravel.png'
import pic3 from './media/java.png'
import pic2 from './media/javascript.png'
import pic5 from './media/c-sharp.png'
import pic6 from './media/cpp.png'
import pic7 from './media/psql.png'

let pseudoStyle = { fontSize: 'x-large' }

const slides = [
  {
    id: 0,
    url: pic1,
  },
  {
    id: 1,
    url: pic4,
  },
  {
    id: 2,
    url: pic3,
  },
  {
    id: 3,
    url: pic2,
  },
  {
    id: 4,
    url: pic5,
  },
  {
    id: 5,
    url: pic6,
  },
  {
    id: 6,
    url: pic7,
  },
]

const Pictures = () => {
  const [index, setIndex] = React.useState(0)
  const increment = () => {
    if (index === 6) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const item = slides[index]
  useInterval(increment, 5000)

  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0, transform: 'scale(1.1)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.9)' },
  })

  return transitions.map(({ item, props, key }) => {
    return (
      <div id='pictureContainer'>
        <animated.div
          key={key}
          className='bg'
          style={{
            backgroundImage: `url(${item.url})`,
            ...props,
          }}
        ></animated.div>

        {item.id === 0 && (
          <animated.div style={pseudoStyle} id='name'>
            Python
          </animated.div>
        )}
        {item.id === 1 && (
          <animated.div style={pseudoStyle} style={pseudoStyle} id='name'>
            Laravel
          </animated.div>
        )}
        {item.id === 2 && (
          <animated.div style={pseudoStyle} id='name'>
            Java
          </animated.div>
        )}
        {item.id === 3 && (
          <animated.div style={pseudoStyle} id='name'>
            JavaScript
          </animated.div>
        )}
        {item.id === 4 && (
          <animated.div style={pseudoStyle} id='name'>
            C#
          </animated.div>
        )}
        {item.id === 5 && (
          <animated.div style={pseudoStyle} id='name'>
            C++
          </animated.div>
        )}
        {item.id === 6 && (
          <animated.div style={pseudoStyle} id='name'>
            PostgreSQL
          </animated.div>
        )}
      </div>
    )
  })
}

export default Pictures
