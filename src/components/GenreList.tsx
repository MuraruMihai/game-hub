import React from 'react'
import useGenres from '../hooks/useGenres'

const GenreList = () => {

    const {genres, error} = useGenres(); 

  return (
    <div>
        {genres.map(genre => <li key={genre.id}>{genre.name} ({genre.games_count})</li>)}
    </div>
  )
}

export default GenreList