import React from "react";
import Category from "./Category"
import "../style/Categories.css"

class CategoryList extends React.Component {
    state = {
        categories: [
            {
                name: "Drama",
                description: "Lorem ipsum blah blah blah blah",
                icon: "cat_drama"
            },
            {
                name: "Romance",
                description: "Lorem ipsum blah blah blah blah blah blah blah",
                icon: "cat_romance"
            },
            {
                name: "Niños",
                description: "Odio a los chukyyyyyssss",
                icon: "cat_children"
            },
            {
                name: "Ciencias",
                description: "Amo las ciencias, aunque no las entienda, odio la religión aunque la entiendo perfectamente.",
                icon: "cat_science"
            }
        ]
    }
    render() {
        return (
            <section className="categories">
                <div className="categories__container container">
                    {
                        this.state.categories.map( (category) => {
                            return <Category key={category.name} category={category}/>
                        })
                    }
                </div>
            </section>
        );
    } 
}

export default CategoryList;
