import React from 'react'
import axios from 'axios'

export default class ProductDetails extends React.Component{
constructor(){
    super()
    this.state = {
        id: '', 
        weight: '',
        height: '',
        base: '',
        imgURL: ''
    }
}

componentDidMount(){
    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.name}`)
        .then(res => {
            this.setState({
                id: res.data.id,
                height: res.data.height,
                weight: res.data.weight,
                base: res.data.base_experience,
                imgURL: res.data.sprites.front_default
            })
        })
}

    render(){
        return(
            <div>
                <h3>{this.props.match.params.name}</h3>
                <img 
                className='pokemon-img'
                    src={this.state.imgURL} alt=""/>
                <h3>Order: {this.state.id}</h3>
                <h3>Height: {this.state.height}</h3>
                <h3>Weight: {this.state.weight} </h3>
                <h3>Base Experience: {this.state.base}</h3>
            </div>
        )
    }
}