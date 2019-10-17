import React, {Component} from 'react'

export default class Login extends Component{
    constructor(){
        super()

        this.state = {
            userName: '',
            password: ''
        }
    }

    input1(e){
        this.setState({
            userName : e
        })
    }

    input2(e){
        this.setState({
            password: e
        })
    }

    clicked(){
        alert(`Username: ${this.state.userName} | Password: ${this.state.password}`)
    }

    render(){
        return(
            <div>
                Username:<input onChange={(e)=>this.input1(e.target.value)}/><br></br>
                Password:<input onChange={(e)=>this.input2(e.target.value)}/><br></br>
                <button onClick={()=>this.clicked()}>Login</button>
            </div>
        )
    }
}