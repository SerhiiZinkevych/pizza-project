import React from 'react'

import { Button, CardSelector } from '../'

import styles from './Card.module.css'

export default function Card({ imageUrl, title, price }) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={imageUrl} alt="Пицца1" />
      <h4 className={styles.cardTitle}>{title}</h4>
      <CardSelector />
      <div className={styles.cardFooter}>
        <span className={styles.price}>от {price}₴</span>
        <Button />
      </div>
    </div>
  )
}
