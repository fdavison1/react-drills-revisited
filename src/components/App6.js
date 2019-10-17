import React from 'react'
import Todo from './Todo'

export default class App6 extends React.Component{
    constructor(){
        super()

        this.state = {
            groceryList : [],
            input: ''
        }
        // this.groceryList = this.groceryList.bind(this)
    }

handleChange(input){
    this.setState({
        input : input
    })
}

whenClick(){
    this.setState({
        groceryList : [...this.state.groceryList, this.state.input],
        // input : ''
    })
}

display

    render(){
        return(
            <div>
                <h2>App6</h2>
                <p>Create an app that displays a to-do list. You will need two components, the App component and a Todo component. The App component should be responsible for getting new tasks and storing the list of tasks. The Todo component should be responsible for displaying the individual tasks from the App component. The App component should create a list of 'Todo' components passing down a task into the Todo component as a prop and display the list.</p>
                <input onChange={(e)=> this.handleChange(e.target.value)}></input>
                <Todo groceries={this.state.groceryList}/>
                <button onClick={()=>this.whenClick()}>Add</button>
            </div>
        )
    }
}