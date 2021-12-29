import React from 'react';

import logoSvg from '../../assets/icons/logo.svg';
import styles from './Logo.module.css';

export default function Logo() {
    return (
        <a href="/" className={styles.siteLogo}>
            <img src={logoSvg} alt="logo" />
            <div className={styles.logoTitle}>
                <h1>React Pizza</h1>
                <p>самая вкусная пицца во вселенной</p>
            </div>
        </a>
    );
}
