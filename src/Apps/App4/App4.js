import React, {Component} from 'react'
import Login from './Login'

export default class App4 extends Component{
    constructor(){
        super()

        this.state = {

        }
    }
    render(){
        return(
            <div>
                <h2>App-4</h2>
                <p>Create a Login component that has two text inputs, one for a username and one for a password, and a button to login the user. When the login button is clicked, an alert should be showed to the user that displays what the user typed in for the username and password.</p>
                <Login />
            </div>
        )
    }
}
