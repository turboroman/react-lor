import InteractiveLink from './interactiveLink/InteractiveLink'
import styles from './Home.module.css'
import imgMovies from '../../images/img-link_movies_2.png'
import imgBooks from '../../images/img-link_books_3.jpg'

const Home = () => {
  const textMovies =
    'The Lord of The Rings movie series rocked the film industry in the early 2000s, grossing nearly $3 billion at the box office and winning a total of 17 Oscars — a record the trilogy still holds to this day. The Hobbit trilogy, a prequel series that graced the silver screen a decade later, may not have been as great as its predecessor, but it is still amazing in its own right.'

  const textBooks = `The Lord of the Rings is an epic high fantasy novel written by J.R.R. Tolkien, which was later fitted as a trilogy. Written in during World War II, it was originally published in three volumes in 1954 and 1955. It has since been reprinted numerous times and translated into at least 38 different languages, becoming one of the most popular works of twentieth-century literature.`

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Welcome to Middle&#8209;earth</h1>
      <p className={styles.text}>
        It’s difficult to imagine a world without The Lord of the Rings. J.R.R.
        Tolkien’s sprawling magnum opus popularized the fantasy genre,
        galvanized a counterculture movement, and snowballed into a global pop
        culture phenomenon. Peter Jackson’s early aughts film adaptations have
        only compounded the series’ enduring popularity, inviting new fans into
        Tolkien’s fantastical world by way of Academy Awards, timeless memes,
        and astounding filmmaking.
      </p>
      <InteractiveLink
        imgSrc={imgMovies}
        imgAlt="Movies"
        text={textMovies}
        linkTo={'movies'}
        position={'left'}
      />
      <InteractiveLink
        imgSrc={imgBooks}
        imgAlt="Books"
        text={textBooks}
        linkTo={'books'}
        position={'right'}
      />
    </div>
  )
}

export default Home
