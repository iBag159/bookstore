import "./App.css";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero";
function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Hero />
            </main>
            <Footer />
        </div>
    );
}

export default App;
