import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import { Button, Logo } from '../';

import cartImg from '../../assets/icons/cart.svg';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/">
                    <Logo />
                </Link>
                <Link to="/cart">
                    <Button className="buttonOrange">
                        <span>230 ₴</span>
                        <img src={cartImg} alt="cart" />
                        <span>3</span>
                    </Button>
                </Link>
            </div>
        </header>
    );
}
