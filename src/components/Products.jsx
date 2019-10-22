import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Products extends React.Component{
    constructor(){
        super()
        this.state = {
            pokemon: ['fred']
        }
    }

    componentDidMount(){
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/`)
        .then(res => {
            // console.log(res)
            this.setState({
                pokemon: res.data.results
            })
        })
    }

    render(){
        let pokemon = this.state.pokemon.map((el, i) => {
            return <Link key={i} to={`/productdetails/${el.name}`}><button>{el.name}</button></Link>
        })
        return(
            <div>
                <h3>List of Pokemon</h3>
                {pokemon}
            </div>
        )
    }
}