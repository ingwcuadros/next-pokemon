import { useEffect, useState } from 'react';
import { NextPage } from 'next'
import { Layout } from '../../components/layouts'
import { Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemos';

const title = 'Favorites'
export const Favorites:NextPage = () => {

  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([])
  useEffect(() => {
    setfavoritePokemons( localFavorites.pokemons() )

  }, [])
  
  return (
    <Layout title={title}>
      {
        favoritePokemons.length === 0
        ? (<NoFavorites/>)
        : (
          <FavoritePokemons pokemons={favoritePokemons} />
        )
      }
    </Layout>
  )
}

export default Favorites
