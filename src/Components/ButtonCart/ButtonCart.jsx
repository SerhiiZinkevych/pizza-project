import React from 'react';

import cartImg from '../../assets/icons/cart.svg';
import styles from './ButtonCart.module.css';

export default function ButtonCart() {
    return (
        <a href="/" className={styles.button}>
            <span>420 ₴</span>
            <div className={styles.delimiter}></div>
            <img src={cartImg} alt="cart image" />
            <span>3</span>
        </a>
    );
}
