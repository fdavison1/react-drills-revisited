import React, {Component} from 'react'

export default class App2 extends Component{
    constructor(){
        super()

        this.state = {
            arr : ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
        }
    }
    render(){
        return(
            <div>
                <h2>App-2</h2>
                <p>Create an app where there is an array of data on state that is then shown on the DOM as a list. The array of data can be as simple as an array of strings. The list can be as simple as a list of h2 elements.</p>
                <div>{this.state.arr.map(
                    food => <h3> {food} </h3>
                )}</div>
            </div>
        )
    }
}