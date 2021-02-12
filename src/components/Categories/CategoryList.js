import React from "react";
import Category from "./Category"
import "../style/Categories.css"

class CategoryList extends React.Component {
    state = {
        categories: [
            {
                name: "Drama",
                description: "",
                icon: "cat_drama"
            },
            {
                name: "Romance",
                description: "",
                icon: "cat_romance"
            },
            {
                name: "Niños",
                description: "",
                icon: "cat_children"
            },
            {
                name: "Ciencias",
                description: "",
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
