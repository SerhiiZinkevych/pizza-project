import React from 'react'
import { Button } from '../'

import styles from './Filter.module.css'

export default function Filter({ items }) {
  return (
    <ul className={styles.categories}>
      {items.map((item) => (
        <li key={item.id} className={styles.listItem}>
          <Button className={item.active ? 'buttonBlack' : 'buttonGray'}>
            {item.name}
          </Button>
        </li>
      ))}
    </ul>
  )
}
