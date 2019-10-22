import React from 'react'
import {Link} from 'react-router-dom'
import router from '../utils/router'

export default class App9 extends React.Component{
    constructor(){
        super()

    }
    render(){
        return(
           
            <div>
                <h2>App-9</h2>
                <p>Create an app that has three routes (using react-router-dom): Home, Component route: '/', Signup, Component route: '/signup', Component route: details '/details'.</p>
                <nav>
                        <Link to='/'><button>Home</button></Link>
                        <Link to='/signup'><button>Sign Up</button></Link>
                        <Link to='/details'><button>Details</button></Link>
                </nav>
                {router}
            </div>
           
        )
    }
}