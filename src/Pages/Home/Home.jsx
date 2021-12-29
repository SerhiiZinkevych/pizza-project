import React from 'react';
import CardsList from '../../Components/CardsList/CardsList';

import Filter from '../../Components/Filter/Filter';
import Sort from '../../Components/Sort/Sort';

import styles from './Home.module.css';

export default function Home() {
    return (
        <>
            <section className={styles.searchSection}>
                <Filter />
                <Sort />
            </section>
            <section className="cards">
                <CardsList />
            </section>
        </>
    );
}
