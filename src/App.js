import "./App.css";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero";
import CategoryList from "./components/Categories/CategoryList";
function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Hero />
                <CategoryList />
            </main>
            <Footer />
        </div>
    );
}

export default App;
