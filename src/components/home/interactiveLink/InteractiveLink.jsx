import styles from './InteractiveLink.module.css'
import { NavLink } from 'react-router-dom'
import cx from 'classnames'

const InteractiveLink = ({ imgSrc, imgAlt, text, linkTo, position }) => {
  let stylePos
  if (position === 'left') {
    stylePos = cx(styles.wrapper, styles.wrapperLeft)
  } else {
    stylePos = cx(styles.wrapper, styles.wrapperRight)
  }
  return (
    <div className={styles.container}>
      <div className={stylePos}>
        <div className={styles.descWrapper}>
          <p className={styles.desc}>{text}</p>
        </div>

        <NavLink className={styles.imgWrapper} to={linkTo}>
          <img className={styles.img} src={imgSrc} alt={imgAlt} />
        </NavLink>
      </div>
    </div>
  )
}

export default InteractiveLink
