import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './Header'
import WelcomeToMyLife from './WelcomeToMyLife'
import * as serviceWorker from './serviceWorker'
import WhoAmI from './WhoAmI'
import WhoAmI2 from './WhoAmI2'

ReactDOM.render(<Header />, document.getElementById('root'))
ReactDOM.render(<WelcomeToMyLife />, document.getElementById('welcomeToMyLife'))
ReactDOM.render(<WhoAmI />, document.getElementById('whoAmI'))
ReactDOM.render(<WhoAmI2 />, document.getElementById('whoAmI2'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
