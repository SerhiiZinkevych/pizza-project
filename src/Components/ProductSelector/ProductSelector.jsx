import React from 'react';

import styles from './ProductSelector.module.css';

export default function ProductSelector() {
    return (
        <div className={styles.cardSelector}>
            <ul>
                <li className={styles.active}>тонкое</li>
                <li>традиционное</li>
            </ul>
            <ul>
                <li className={styles.active}>26 см.</li>
                <li className={styles.disabled}>30 см.</li>
                <li>40 см.</li>
            </ul>
        </div>
    );
}
