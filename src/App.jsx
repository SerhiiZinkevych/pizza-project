import { Header } from './Components';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';

function App() {
    return (
        <>
            <div className="wrapper">
                <Header />
                <main className="container">
                    {/* <Home /> */}
                    <Cart />
                </main>
            </div>
        </>
    );
}

export default App;
