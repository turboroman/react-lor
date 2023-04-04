import getData from '../../api-queries/getData'
import { useEffect, useState } from 'react'

import MovieElem from './movieElem/MovieElem'

import bgFellowship from '../../images/fellowship.jpg'
import bgTwoTowers from '../../images/two-towers.png'
import bgReturnOfKing from '../../images/king_2.jpg'

import bgUnexpected from '../../images/the-hobbit-an-unexpected.jpg'
import bgSmaug from '../../images/the-hobbit-the-desolation-of-smaug.jpg'
import bgFiveArmies from '../../images/the-hobbit-the-battle-of-the-five-armies.jpg'

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getData('movie', setMovies)
  }, [])

  console.log(movies)

  return (
    <div>
      {movies.map((movie) => {
        switch (movie.name) {
          case 'The Fellowship of the Ring':
            return (
              <MovieElem
                key={movie._id}
                background={bgFellowship}
                movie={movie}
              />
            )

          case 'The Two Towers ':
            return (
              <MovieElem
                key={movie._id}
                background={bgTwoTowers}
                movie={movie}
              />
            )

          case 'The Return of the King':
            return (
              <MovieElem
                key={movie._id}
                background={bgReturnOfKing}
                movie={movie}
              />
            )

          case 'The Unexpected Journey':
            return (
              <MovieElem
                key={movie._id}
                background={bgUnexpected}
                movie={movie}
              />
            )

          case 'The Desolation of Smaug':
            return (
              <MovieElem key={movie._id} background={bgSmaug} movie={movie} />
            )

          case 'The Battle of the Five Armies':
            return (
              <MovieElem
                key={movie._id}
                background={bgFiveArmies}
                movie={movie}
              />
            )

          default:
            return ''
        }
      })}
    </div>
  )
}

export default Movies
