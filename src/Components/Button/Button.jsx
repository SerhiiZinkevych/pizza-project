import React from 'react';

import styles from './Button.module.css';

export default function Button({ className, onClick, children }) {
    return (
        <button onClick={() => onClick()} className={styles[className]}>
            {children}
        </button>
    );
}
