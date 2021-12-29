import React from 'react';

import { CardsList, Filter, Sort } from '../../Components';

import styles from './Home.module.css';

export default function Home() {
    return (
        <>
            <section className={styles.searchSection}>
                <Filter
                    items={[
                        { id: 1, name: 'Все', active: false },
                        { id: 2, name: 'Мясные', active: true },
                        { id: 3, name: 'Вегетерианская', active: false },
                        { id: 4, name: 'Гриль', active: false },
                        { id: 5, name: 'Острые', active: false },
                        { id: 6, name: 'Закрытые', active: false },
                    ]}
                />
                <Sort />
            </section>
            <section className="cards">
                <CardsList />
            </section>
        </>
    );
}
