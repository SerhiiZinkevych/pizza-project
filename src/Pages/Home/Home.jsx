import React from 'react';

import { ProductsList, Filter, Sort } from '../../Components';

import styles from './Home.module.css';

const items = [
    // { id: 1, name: 'Все'},
    { id: 2, name: 'Мясные' },
    { id: 3, name: 'Вегетерианская' },
    { id: 4, name: 'Гриль' },
    { id: 5, name: 'Острые' },
    { id: 6, name: 'Закрытые' },
];

const sort = [
    { id: 1, name: 'по популярности', active: false },
    { id: 2, name: 'по цене', active: true },
    { id: 3, name: 'по алфавиту', active: false },
];

export default function Home({ products }) {
    return (
        <>
            <section className={styles.searchSection}>
                <Filter items={items} />
                <Sort items={sort} />
            </section>
            <section className="cards">
                {products && <ProductsList items={products} />}
            </section>
        </>
    );
}
