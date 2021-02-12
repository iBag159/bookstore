import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import SeebookID from "./pages/SeebookID"
import Login from "./pages/Login"
import Register from "./pages/Register"
import CartShop from "./pages/CartShop"
import PassRecovery from "./pages/PassRecovery"
import Err404 from "./pages/Error/404"

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}/>
                
                    <Route exact path="/libro/:id" component={SeebookID}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/password-recovery" component={PassRecovery}/>
                    <Route exact path="/carrito-compra" component={CartShop}/>
                    <Route component={Err404}/>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
