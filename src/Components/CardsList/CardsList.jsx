import React from 'react'

import Card from '../Card/Card'

import styles from './CardsList.module.css'

export default function CardsList({ items }) {
  return (
    <>
      <h2 className={styles.title}>Все пиццы</h2>
      <ul className={styles.cardsList}>
        {items.map((item) => (
          <li key={item.id}>
            <Card {...item} />
          </li>
        ))}
      </ul>
    </>
  )
}
