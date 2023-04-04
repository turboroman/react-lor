import { useState, useEffect } from 'react'
import getData from '../../api-queries/getData'

import BookElem from './bookElem/BookElem'

import bgFellowship from '../../images/bg-fellowship_of_the_ring.png'
import bgTwoTowers from '../../images/bg-two_towers.png'
import bgReturnOfKing from '../../images/bg-return_of_the_king.png'

const Books = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getData('book', setBooks)
  }, [])

  return (
    <div>
      {books.map((book) => {
        switch (book.name) {
          case 'The Fellowship Of The Ring':
            return (
              <BookElem
                key={book._id}
                id={book._id}
                background={bgFellowship}
              />
            )

          // case 'The Two Towers':
          //   return (
          //     <BookElem key={book._id} id={book._id} background={bgTwoTowers} />
          //   )

          // case 'The Return Of The King':
          //   return (
          //     <BookElem
          //       key={book._id}
          //       id={book._id}
          //       background={bgReturnOfKing}
          //     />
          //   )

          default:
            return ''
        }
      })}
    </div>
  )
}

export default Books
