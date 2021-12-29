import React from 'react'

import cartImg from '../../assets/icons/cart.svg'
import styles from './ButtonCart.module.css'

export default function ButtonCart({ price, qty }) {
  return (
    <a href="/" className={styles.button}>
      <span>{price} ₴</span>
      <div className={styles.delimiter}></div>
      <img src={cartImg} alt="cart" />
      <span>{qty}</span>
    </a>
  )
}
