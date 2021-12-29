import styles from './Header.module.css';

import { ButtonCart, Logo } from '../';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo />
                <ButtonCart />
            </div>
        </header>
    );
}
