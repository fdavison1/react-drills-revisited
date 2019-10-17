import React from 'react'

export default class List extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let listDisplay = this.props.list.map((el, i)=> {
            return <h3> {el} </h3>
        })
        return(
            <div>
                {listDisplay}
            </div>
        )
    }
}