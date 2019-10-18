import React from 'react'

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
                        <p><a href=''>(Home)</a><a href=''>(Signup)</a><a href=''>(Details)</a></p>
                </nav>
            </div>
        )
    }
}