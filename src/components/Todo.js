import React from 'react'

export default class Todo extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        let output = this.props.groceries.map((el,i) => 
            <h3 key={i}>{el}</h3>
        ) 
        return(
            <div>
                {output}
            </div>
        )
    }
}