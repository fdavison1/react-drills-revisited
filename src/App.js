import React, {Component} from 'react'
import './App.css'
import App1 from './Apps/App1/App1'

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
      </div>
    )
  }
}