import React, { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import pic1 from './media/webPages/html.png'
import pic2 from './media/webPages/chat.png'
import pic3 from './media/webPages/css.png'
import pic4 from './media/webPages/memory.png'
import pic5 from './media/webPages/labyrynth.png'

class ImageCarousel extends Component {
  state = {}
  render() {
    return (
      <Carousel>
        <div>
          <img src={pic1} />
          <a href='http://quetzaluno.space/17652/Lab_2/Story/starter.html'>
            HTML Story
          </a>
        </div>
        <div>
          <img src={pic2} />
          <a href='http://quetzaluno.space/17652/Helvette.html'>
            Makeshift Chat
          </a>
        </div>
        <div>
          <img src={pic3} />
          <a href='http://quetzaluno.space/17652/lab_5.html'>CSS Art</a>
        </div>
        <div>
          <img src={pic4} />
          <a href='http://quetzaluno.space/17652/Lab_6/dist/index.html'>
            Memory Game
          </a>
        </div>
        <div>
          <img src={pic5} />
          <a href='http://quetzaluno.space/17652/Lab_7/dist/index.html'>
            Labyrynth Game
          </a>
        </div>
      </Carousel>
    )
  }
}

export default ImageCarousel
