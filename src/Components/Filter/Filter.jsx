import React from 'react';

import styles from './Filter.module.css';

export default function Filter({ items }) {
    return (
        <ul className={styles.categories}>
            {items.map((item) => (
                <li
                    key={item.id}
                    className={item.active ? styles.active : styles.button}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
}
