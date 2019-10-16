import React, {Component} from 'react'
import './App.css'
import App1 from './Apps/App1/App1'
import App2 from './Apps/App2/App2'

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
        <App1 />
        <hr></hr>
        <App2 />
        <hr></hr>
      </div>
    )
  }
}