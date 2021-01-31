import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Book from "./pages/Book"
import Err404 from "./pages/Error/404"

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/book" component={Book}/>
                    <Route component={Err404}/>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
