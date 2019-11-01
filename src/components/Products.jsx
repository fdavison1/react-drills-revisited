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
            console.log(res.data.results)
            this.setState({
                pokemon: res.data.results,
            })
        })
    }

    render(){
        let pokemon = this.state.pokemon.map((el, i) => {
            // console.log(el)
            return (
                
                <div key={i}>

                    {/* <h1>test</h1> */}
                    {/* <img src={el.sprites.front_default} alt=""/> */}

                    <Link key={i} to={`/productdetails/${el.name}`}>
                        <button>{el.name}</button>
                    </Link>

                </div>
                
                
                
                )
                // console.log({el})

            
                
            
        })
        return(
            <div>
                <h3>List of Pokemon</h3>
                {pokemon}
            </div>
        )
    }
}