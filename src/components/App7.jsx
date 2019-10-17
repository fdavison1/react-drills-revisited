import React from 'react'
import NewTask from './NewTask'

export default class App7 extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <h2>App-7</h2>
                <p>Create an app similiar to question #6, except this time add a new third component called NewTask. NewTask should be responsible for adding a new task to a task array on the App component. Also add a new fourth component called List. List should be responsible for display the tasks inside of a task array on the App component in a list-like fashion.</p>
                <NewTask />
            </div>
        )
    }
}