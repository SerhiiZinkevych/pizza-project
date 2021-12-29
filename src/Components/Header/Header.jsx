import styles from './Header.module.css';
import ButtonCart from '../ButtonCart/ButtonCart';
import Logo from '../Logo/Logo';

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
