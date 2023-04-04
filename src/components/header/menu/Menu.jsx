import { NavLink } from 'react-router-dom'
import cx from 'classnames'

import styles from './Menu.module.css'

const Menu = ({ items, active, setActive }) => {
  return (
    <div
      className={active ? cx(styles.wrapper, styles.active) : styles.wrapper}
    >
      <nav>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.value}>
              <NavLink
                onClick={() => {
                  setActive(!active)
                }}
                className={({ isActive }) =>
                  isActive ? cx(styles.link, styles.activeLink) : styles.link
                }
                to={item.href}
                end
              >
                {item.value}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Menu
