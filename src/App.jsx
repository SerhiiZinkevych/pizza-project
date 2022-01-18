import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './Components';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';

function App() {
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('http://localhost:3000/db.json')
            .then((resp) => resp.json())
            .then((data) => setProducts(data.pizzas));
    }, []);

    // console.log(products);

    return (
        <>
            <div className="wrapper">
                <Header />
                <main className="container">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Home products={products} />}
                        />
                        <Route path="cart" element={<Cart />} />
                    </Routes>
                </main>
            </div>
        </>
    );
}

export default App;
