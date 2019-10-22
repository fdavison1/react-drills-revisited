import React from 'react'

export default class Todo extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        let output = this.props.groceries.map((el,i) => 
            <div className='task'>
                <h3 className='taskItem' key={i}>{el}</h3>
                <button>X</button>
            </div>
        ) 
        return(
            <div>
                {output}
            </div>
        )
    }
}