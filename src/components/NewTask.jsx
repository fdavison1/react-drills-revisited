import React, {Component} from 'react'
import List from './List'

export default class NewTask extends Component{
    constructor(){
        super()

        this.state = {
            list : [], 
            input: ''
        }
    }

handleChange(input){
    this.setState({
        input: input
    })
}

handleClick(){
    this.setState({
        list: [...this.state.list, this.state.input]
    })
}

    render(){
        return(
            <div>
                <input placeholder='Add to do' onChange={(e) => this.handleChange(e.target.value)}/>
                <button onClick={() => this.handleClick()}>Add</button>
                <List list={this.state.list}/>
            </div>
        )
    }
}