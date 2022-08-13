import { NextPage , GetStaticProps } from 'next'


import { Layout } from '../components/layouts'
import pokeApi from '../api/pokeApi';
import { PokemonListResponse } from '../interfaces';
import { SmallPokemon } from '../interfaces/pokemon-list';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { PokemonCard } from '../components/pokemos';

const title = 'Maestro Pokemon'
interface Props {
  pokemons: SmallPokemon[]
}
const HomePage: NextPage<Props> = ({pokemons}) => {
  //console.log(pokemons)
  return (
    <Layout title={title}>
      <Grid.Container gap={2} justify='flex-start'>
        { 
          pokemons.map((pokemon) => (
              <PokemonCard pokemon={pokemon} key={pokemon.id}/>
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  //console.log(data)
  const  base_url=  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world"
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index+1,
    img: `${base_url}/${index+1}.svg`
  }))
  return {
    props:{
      pokemons: pokemons
    }
  }
}

export default HomePage
