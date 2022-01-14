import React from 'react';

import { Product } from '../';

import styles from './ProductsList.module.css';

export default function ProductsList({ items }) {
    return (
        <>
            <h2 className={styles.title}>Все пиццы</h2>
            <ul className={styles.cardsList}>
                {items.map((item) => (
                    <li key={item.id}>
                        <Product {...item} />
                    </li>
                ))}
            </ul>
        </>
    );
}
