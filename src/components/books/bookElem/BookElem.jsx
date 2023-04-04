import { useState, useEffect } from 'react'
import styles from './BookElem.module.css'
import cx from 'classnames'

import getData from '../../../api-queries/getData'
import ChaptersBtn from './chaptersBtn/ChaptersBtn'

const BookElem = ({ background, id }) => {
  const container = {
    backgroundImage: `url(${background})`,
  }

  const [chapters, setChapters] = useState([])

  useEffect(() => {
    getData('book/' + id + '/chapter', setChapters)
  }, [id])

  const [listState, setListState] = useState(false)

  return (
    <div style={container} className={styles.container}>
      <ChaptersBtn
        active={listState}
        setActive={setListState}
        style={styles.btn}
      />

      <ul
        className={listState ? cx(styles.listOpened, styles.list) : styles.list}
      >
        {chapters.map((chapter) => {
          return (
            <li key={chapter._id} className={styles.item}>
              <span className={styles.chapter}>{chapter.chapterName}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BookElem
