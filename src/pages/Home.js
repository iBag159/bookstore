import React from "react"
import Hero from "../components/Hero";
import CategoryList from "../components/Categories/CategoryList";
import CellbookList from "../components/CellbookList";

class Home extends React.Component {
    componentDidMount() {
        this.fetchBooks();
    }
    fetchBooks = async () => {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/new');
        const data = await response.json()
        console.log(data)
    }
    render() {
        return (
            <main>
                <Hero />
                <CategoryList />
                <CellbookList />
            </main>
        );
    }
}

export default Home;