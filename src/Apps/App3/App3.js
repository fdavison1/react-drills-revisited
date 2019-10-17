import React, {Component} from 'react'

export default class App3 extends Component{
    constructor(){
        super()

        this.state = {
            arr : ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
            newArr: ''
        }
        // this.handleChange = this.handle
    }

handleChange(e){
    this.setState({
        newArr : e
    })
}

    render(){
        let filtered = this.state.arr.filter(
            el => el.includes(this.state.newArr)
        ).map(
            (el,i) => <h3 key={i}>{el}</h3>
        )
        return(
            <div>
                <h2>App-3</h2>
                <p>Create an app where there is an array of data on state that is then shown on the DOM as a list. There should also be a way for the user to filter what's shown in the list. The array of data can be as simple as an array of strings. The list can be as simple as a list of h2 elements.</p>
                <input onChange={(e)=> this.handleChange(e.target.value)}/>
                {filtered}
            </div>
        )
    }
}