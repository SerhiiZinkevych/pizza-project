import React from 'react'
import CartListItem from '../CartListItem/CartListItem'

import styles from './CartList.module.css'

export default function CartList() {
  return (
    <ul className={styles.cartList}>
      {[1, 2, 3, 4].map((el, index) => (
        <li key={index} className={styles.cartItem}>
          <CartListItem />
        </li>
      ))}
    </ul>
  )
}
