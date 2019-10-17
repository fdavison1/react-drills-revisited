import React from 'react'

export default class Img extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div>
                <img src={this.props.imageURL}/>
            </div>
        )
    }
}