import React from 'react';
import styles from './Filter.module.css';

export default function Filter() {
    return (
        <ul className={styles.categories}>
            <li className={styles.active}>Все</li>
            <li className={styles.button}>Мясные</li>
            <li className={styles.button}>Вегетерианская</li>
            <li className={styles.button}>Гриль</li>
            <li className={styles.button}>Острые</li>
            <li className={styles.button}>Закрытые</li>
        </ul>
    );
}
