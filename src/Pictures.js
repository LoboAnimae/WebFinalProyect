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
  useInterval(increment, 20000)

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

        {item.id === 0 && <div id='name'>Python</div>}
        {item.id === 1 && <div id='name'>Laravel</div>}
        {item.id === 2 && <div id='name'>Java</div>}
        {item.id === 3 && <div id='name'>JavaScript</div>}
        {item.id === 4 && <div id='name'>C#</div>}
        {item.id === 5 && <div id='name'>C++</div>}
        {item.id === 6 && <div id='name'>PostgreSQL</div>}
      </div>
    )
  })
}

export default Pictures
