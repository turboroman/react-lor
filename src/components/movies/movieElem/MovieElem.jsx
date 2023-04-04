import styles from './MovieElem.module.css'
import cx from 'classnames'

import oscar from '../../../images/oscar.svg'
import oscarGold from '../../../images/oscar_gold.svg'
import {
  RiMoneyDollarCircleFill,
  RiMoneyDollarCircleLine,
} from 'react-icons/ri'
import { SiRottentomatoes } from 'react-icons/si'

const MovieElem = ({ background, movie }) => {
  const container = {
    backgroundImage: `url(${background})`,
  }

  let nominationArray = []
  for (let i = 0; i < movie.academyAwardNominations; i++)
    nominationArray.push(i)

  return (
    <div style={container} className={styles.container}>
      <div className={cx(styles.info)}>
        <div className={styles.left}>
          <h2 className={styles.name}>{movie.name}</h2>

          <div className={styles.awards}>
            <ul className={cx(styles.oscarList)}>
              {nominationArray.map((i) => {
                if (i < movie.academyAwardWins)
                  return (
                    <li className={styles.oscarItem} key={i}>
                      <img
                        className={styles.oscar}
                        src={oscarGold}
                        alt="Oscar"
                      ></img>
                    </li>
                  )

                return (
                  <li className={styles.oscarItem} key={i}>
                    <img className={styles.oscar} src={oscar} alt="Oscar"></img>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.rating}>
            <SiRottentomatoes className={styles.tomato} />
            &nbsp;
            <span>{movie.rottenTomatoesScore}</span>
          </div>
          <div className={styles.money}>
            <div className={styles.moneyNames}>
              <span>Budget&nbsp;</span>
              <span>Revenue&nbsp;</span>
            </div>
            <div className={styles.moneyNumbers}>
              <div className={styles.moneyNumber}>
                {movie.budgetInMillions}
                &nbsp;
                <RiMoneyDollarCircleFill className={styles.moneyIcon} />
              </div>
              <div className={styles.moneyNumber}>
                {movie.boxOfficeRevenueInMillions}
                &nbsp;
                <RiMoneyDollarCircleLine className={styles.moneyIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieElem
