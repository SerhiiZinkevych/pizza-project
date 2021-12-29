import React from 'react';

import Button from '../Button/Button';
import CardSelector from '../CardSelector/CardSelector';

import styles from './Card.module.css';
import pizza from '../../assets/img/pizza1.png';

export default function Card() {
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src={pizza} alt="Пицца1" />
            <h4 className={styles.cardTitle}>Чизбургер-пицца</h4>
            <CardSelector />
            <div className={styles.cardFooter}>
                <span className={styles.price}>от 120₴</span>
                <Button />
            </div>
        </div>
    );
}
