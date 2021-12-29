import React from 'react';
import styles from './Sort.module.css';
import arrowTop from '../../assets/icons/arrow-top.svg';

export default function Sort() {
    return (
        <div className={styles.sort}>
            <div className={styles.sortLabel}>
                <img src={arrowTop} alt="sort icon" />
                <b>Сортировка по:</b>
                <span>популярности</span>
                <ul className={styles.sortPopup}>
                    <li className={styles.active}>популярности</li>
                    <li className={styles.sortItem}>цене</li>
                    <li className={styles.sortItem}>алфавиту</li>
                </ul>
            </div>
        </div>
    );
}
