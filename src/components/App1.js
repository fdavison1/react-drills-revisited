import React, {Component} from 'react'

export default class App1 extends Component{
    constructor(){
        super()

        this.state = {
            input : ''
        }
    }

handleChange(e){
    this.setState({input: e.target.value})
}

    render(){
        return(
            <div>
                <h2>App-1</h2>
                <p>Create a basic react app where you type in a text box and it shows up as text on the DOM.</p>
                <input placeholder='type something!' onChange={(e)=>this.handleChange(e)}/>
                <h3>{this.state.input}</h3>
            </div>
        )
    }
}