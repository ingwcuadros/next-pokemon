const toggleFavorite  = (id: number ) => {
    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]')
   
    //Pregunta si el arreglo favorites armado a partir del JSON del localStorage 
    //contiene el id que le pasan a través de la función
    //y con el filter excluye el elemento que ya exista en el arreglo
    if( favorites.includes(id)){
        favorites = favorites.filter( pokeId => pokeId !== id)
    }else{
        favorites.push(id)
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existInFavorites =  (id: number): boolean => {
    if( typeof window === 'undefined') return false;
    const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]')
    return favorites.includes(id)
}
const pokemons = ():number[] => {
    return JSON.parse( localStorage.getItem('favorites') || '[]')
}
export default {
    toggleFavorite,
    existInFavorites,
    pokemons
}