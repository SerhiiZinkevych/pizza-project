import styles from './Header.module.css'

import { Button, Logo } from '../'

import cartImg from '../../assets/icons/cart.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Button className="buttonOrange">
          <span>230 ₴</span>
          <img src={cartImg} alt="cart" />
          <span>3</span>
        </Button>
      </div>
    </header>
  )
}
