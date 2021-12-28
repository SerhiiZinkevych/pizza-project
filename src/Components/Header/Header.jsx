import logoSvg from '../../assets/icons/logo.svg'
import logoCart from '../../assets/icons/cart.svg'

import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={`${'container'} ${styles.header}`}>
      <div className={styles.logo}>
        <img width="38" src={logoSvg} alt="pizza logo" />
        <div className={styles.logoTitle}>
          <h1>React Pizza</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>

      <div className={styles.headerCart}>
        <a href="/" className={`${'button'} ${styles.buttonCart}`}>
          <span className={styles.totalPrice}>120 ₴</span>
          <img src={logoCart} alt="" />
          {/* <div class="button__delimiter"></div> */}
          <span className={styles.totalCount}>3</span>
        </a>
      </div>
    </header>
  )
}
