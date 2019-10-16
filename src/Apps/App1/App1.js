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
                <input onChange={(e)=>this.handleChange(e)}/>
                <h3>{this.state.input}</h3>
            </div>
        )
    }
}