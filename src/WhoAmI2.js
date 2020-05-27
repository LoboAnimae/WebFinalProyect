import React, { Component } from 'react'
import './WhoAmI2.css'
import Pictures from './Pictures'

// Import pictures
import Python from './media/python.png'
import Laravel from './media/laravel.png'
import Java from './media/java.png'
import JS from './media/javascript.png'
import CSharp from './media/c-sharp.png'
import Cpp from './media/cpp.png'
import PostgreSQL from './media/psql.png'

class WhoAmI2 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div id='ordered'>
        <div id='leftText'>
          <div id='text'>I know how to use:</div>
          <div id='innerLeftText'>
            <div id='python'>
              <img src={Python} /> Python
            </div>
            <div id='Laravel'>
              <img src={Laravel} /> Laravel
            </div>
            <div id='java'>
              <img src={Java} /> Java
            </div>
            <div id='javascript'>
              <img src={JS} /> JavaScript
            </div>
            <div id='csharp'>
              <img src={CSharp} /> C#
            </div>
            <div id='cpp'>
              <img src={Cpp} /> C++
            </div>
            <div id='psql'>
              <img src={PostgreSQL} /> PostgreSQL
            </div>
            <div id='more'>And more!</div>
          </div>
        </div>
        <div id='rightImages'>
          <Pictures />
        </div>
      </div>
    )
  }
}

export default WhoAmI2
