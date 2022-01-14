import { Route, Routes } from 'react-router-dom';

import { Header } from './Components';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';

function App() {
    return (
        <>
            <div className="wrapper">
                <Header />
                <main className="container">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="cart" element={<Cart />} />
                    </Routes>
                </main>
            </div>
        </>
    );
}

export default App;
