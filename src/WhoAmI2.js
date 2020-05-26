import React, { Component } from 'react'
import './WhoAmI2.css'
import Pictures from './Pictures'

class WhoAmI2 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div id='ordered'>
        <div id='text'>I know how to program:</div>
        <div id='leftText'>
          <div id='innerLeftText'>
            <div id='python'>Python</div>
            <div id='Laravel'>Laravel</div>
            <div id='java'>Java</div>
            <div id='javascript'>JavaScript</div>
            <div id='csharp'>C#</div>
            <div id='cpp'>C++</div>
            <div id='psql'>PostgreSQL</div>
            <div id='more'>And more!</div>
          </div>
        </div>
        <div id='rightImages'>
          <Pictures />
          {console.log(this.props)}
        </div>
      </div>
    )
  }
}

export default WhoAmI2
