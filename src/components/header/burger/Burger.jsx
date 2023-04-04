import cx from 'classnames'

import styles from './Burger.module.css'

const Burger = ({ active, setActive }) => {
  return (
    <div
      onClick={() => setActive(!active)}
      className={active ? cx(styles.active, styles.bar) : styles.bar}
    >
      <span />
    </div>
  )
}

export default Burger
