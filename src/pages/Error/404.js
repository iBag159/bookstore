import { Link } from "react-router-dom";

function Err404() {
    return (
        <main>
            <div className="container">
                <h1>404: Not Found 😔 </h1>
                <Link to="/">Ir a la página principal</Link>
            </div>
        </main>
    );
}

export default Err404;