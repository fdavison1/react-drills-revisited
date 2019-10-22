import React from 'react'

export default class List extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let listDisplay = this.props.list.map((el, i)=> {
            return <div className='task'>
                <h3> {el} </h3>
                <button>X</button>
            </div>
        })
        return(
            <div>
                {listDisplay}
            </div>
        )
    }
}