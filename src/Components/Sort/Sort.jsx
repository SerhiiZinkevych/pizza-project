import React, { useState, useEffect } from 'react';
import styles from './Sort.module.css';
import arrowTop from '../../assets/icons/arrow-top.svg';

export default function Sort({ items }) {
    const [visible, setVisible] = useState(false);
    const [active, setActive] = useState(1);

    const onTogglePopup = () => {
        setVisible(!visible);
    };

    const onSortChange = (id) => {
        setActive(id);
    };

    const handleOutsideClick = (e) => {
        setVisible(false);
    };

    useEffect(() => {
        if (visible) {
            document.body.addEventListener('click', handleOutsideClick);
        }
        return () => {
            document.body.removeEventListener('click', handleOutsideClick);
        };
    }, [visible]);

    return (
        <div className={styles.sort}>
            <div className={styles.sortLabel}>
                <img src={arrowTop} alt="sort icon" />
                <b>Сортировка:</b>
                <span onClick={onTogglePopup}>
                    {items.find((item) => item.id === active)?.name}
                </span>

                {visible && (
                    <ul className={styles.sortPopup}>
                        {items.map((item) => (
                            <li
                                key={item.id}
                                className={
                                    item.id === active
                                        ? styles.active
                                        : styles.sortItem
                                }
                                onClick={() => onSortChange(item.id)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
