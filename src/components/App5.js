import React, {Component} from 'react'
import Img from './Img'

export default class App5 extends Component{
    constructor(){
        super()

        this.state = {
            imageURL : 'https://previews.123rf.com/images/andreypopov/andreypopov1406/andreypopov140600862/29532630-full-length-of-excited-young-business-people-jumping-over-white.jpg'
        }
    }
    render(){
        return(
            <div>
                <h2>App5</h2>
                <p>Create an Image component that renders an img element. The src for the img should be passed down as a prop from the parent component.</p>
                <Img imageURL={this.state.imageURL}/>
            </div>
        )
    }
}