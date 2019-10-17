import React, {Component} from 'react'
import './App.css'
import App1 from './components/App1'
import App2 from './components/App2'
import App3 from './components/App3'
import App4 from './components/App4'
import App5 from './components/App5'
import App6 from './components/App6'

export default class App extends Component{
  constructor(){
    super()

    this.state = {

    }
  }
  render(){
    return(
      <div className='App'>
        <h1>React Drills!</h1>
        <hr></hr>
        <img src='https://github.com/DevMountain/react-drills/raw/assets/1g.gif'/>
        <App1 />
        <hr></hr>
        <App2 />
        <hr></hr>
        <App3 />
        <hr></hr>
        <App4 />
        <hr></hr>
        <App5 />
        <hr></hr>
        <App6 />
        <hr></hr>
      </div>
    )
  }
}