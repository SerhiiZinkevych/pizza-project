import React from 'react'
import styles from './Sort.module.css'
import arrowTop from '../../assets/icons/arrow-top.svg'

export default function Sort({ items }) {
  return (
    <div className={styles.sort}>
      <div className={styles.sortLabel}>
        <img src={arrowTop} alt="sort icon" />
        <b>Сортировка:</b>
        <span>{items.find((item) => item.active === true).name}</span>
        <ul className={styles.sortPopup}>
          {items.map((item) => (
            <li
              key={item.id}
              className={item.active ? styles.active : styles.sortItem}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
