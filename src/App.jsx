import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';

function App() {
    return (
        <>
            <div className="wrapper">
                <Header />
                <main className="container">
                    <Home />
                </main>
            </div>
        </>
    );
}

export default App;
