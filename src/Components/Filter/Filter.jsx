import React, { useState } from 'react';
import { Button } from '../';

import styles from './Filter.module.css';

export default function Filter({ items }) {
    const [activeItem, setActiveItem] = useState(null);
    return (
        <ul className={styles.categories}>
            <li className={styles.listItem}>
                <Button
                    className={
                        activeItem === null ? 'buttonBlack' : 'buttonGray'
                    }
                    onClick={() => setActiveItem(null)}
                >
                    Все
                </Button>
            </li>
            {items &&
                items.map((item) => (
                    <li key={item.id} className={styles.listItem}>
                        <Button
                            className={
                                activeItem === item.id
                                    ? 'buttonBlack'
                                    : 'buttonGray'
                            }
                            onClick={() => setActiveItem(item.id)}
                        >
                            {item.name}
                        </Button>
                    </li>
                ))}
        </ul>
    );
}
