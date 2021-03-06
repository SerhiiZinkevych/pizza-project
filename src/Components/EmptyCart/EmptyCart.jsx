import React from 'react'
import styles from './EmptyCart.module.css'

import emptyCartImg from '../../assets/img/empty-cart.png'
import { Button } from '../'

export default function EmptyCart() {
  return (
    <div className={styles.cartEmpty}>
      <h2>
        Корзина пустая <icon>😕</icon>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={emptyCartImg} alt="" />
      <Button className="buttonBlack">Вернуться назад</Button>

      {/* <a href="/" className={`${'button'} ${styles.buttonBlack}`}>
        <span>Вернуться назад</span>
      </a> */}
    </div>
  )
}
