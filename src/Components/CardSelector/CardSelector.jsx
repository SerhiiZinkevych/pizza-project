import React from 'react'

import styles from './CardSelector.module.css'

export default function CardSelector() {
  return (
    <div className={styles.cardSelector}>
      <ul>
        <li className={styles.active}>тонкое</li>
        <li>традиционное</li>
      </ul>
      <ul>
        <li className={styles.active}>26 см.</li>
        <li>30 см.</li>
        <li>40 см.</li>
      </ul>
    </div>
  )
}
