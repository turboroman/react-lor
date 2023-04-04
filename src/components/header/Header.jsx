import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import cx from 'classnames'

import styles from './Header.module.css'
import logo from '../../images/logo.jpg'
import Burger from './burger/Burger'
import Menu from './menu/Menu'

function Header() {
  const navList = [
    { value: 'Home', href: '/' },
    { value: 'Books', href: '/books' },
    { value: 'Movies', href: '/movies' },
  ]

  const [menuActive, setMenuActive] = useState(false)

  return (
    <div className={styles.header}>
      <NavLink className={styles.logo} to="/" end>
        <img alt="logo" src={logo}></img>
      </NavLink>
      <Menu active={menuActive} setActive={setMenuActive} items={navList} />

      <nav className={styles.nav}>
        <ul className={styles.list}>
          {navList.slice(1).map((item) => (
            <li className={styles.item} key={item.value}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? cx(styles.link, styles.activeLink) : styles.link
                }
                to={item.href}
              >
                {item.value}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <Burger
        active={menuActive}
        setActive={setMenuActive}
        className={styles.burger}
      />
    </div>
  )
}

export default Header
