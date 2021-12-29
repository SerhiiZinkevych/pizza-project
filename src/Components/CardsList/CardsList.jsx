import React from 'react';
import Card from '../Card/Card';

import styles from './CardsList.module.css';

export default function CardsList() {
    return (
        <>
            <h2 className={styles.title}>Все пиццы</h2>
            <ul className={styles.cardsList}>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
            </ul>
        </>
    );
}
