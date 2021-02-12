import React from "react";
import "./style/CellbookList.css";
import Cellbook from "../components/Cellbook";

class CellbookList extends React.Component{
    state = {
        books: [
            {   id: 'book1',
                title: 'Donate a book ',
                author: "Nicolas Sumpir",
                cover: 'https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-2_grande.jpg?v=1587121928',
                price: "100.00"
            },
            {   id: "book2",
                title: "Maroc",
                author: "Coco Simon",
                cover: "https://wpbingosite.com/wordpress/bootin/wp-content/uploads/2019/05/Image-28.jpg",
                price: "100.00"
            },
            {   id: "book3",
                title: "The red planet",
                author: "O. G. Hopkins",
                cover: "https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-80_grande.jpg?v=1587118663",
                price: "100.00"
            }, 
            {   id: "book4",
                title: "Endelss Summer",
                author: "Dany Novel",
                cover: "https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-101_grande.jpg?v=1587115881",
                price: "100.00"
            }, 
            {   id: "book5",
                title: "103 Home cooked meals",
                author: "Seaton Kitchen",
                cover: "https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-33_grande.jpg?v=1587116925",
                price: "100.00"
            }, 
            {   id: "book6",
                title: "Maroc 2002",
                author: "Nicolas Sumpir",
                cover: "https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-26_grande.jpg?v=1587116432",
                price: "100.00"
            }, 
            {   id: "book7",
                title: "Cup Cake Diraes",
                author: "Anna Hilton",
                cover: "https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-39_grande.jpg?v=1587119146",
                price: "100.00"
            }, 
            {   id: "book8",
                title: "Delicious Place",
                author: "Coco Simon",
                cover: "https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-67_grande.jpg?v=1587117773",
                price: "100.00"
            }, 
            {   id: "book9",
                title: "Cup Cake Diraes",
                author: "Anna Hilton",
                cover: "https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-41_grande.jpg?v=1587119146",
                price: "100.00"
            }, 
            {   id: "book10",
                title: "Maroc 2002",
                author: "Nicolas Sumpir",
                cover: "https://cdn.shopify.com/s/files/1/0359/5979/9852/products/shop-new-40_grande.jpg?v=1587119146",
                price: "100.00"
            }, 
        ],
        colors: ["red"]
    }
    render() {
        return(

            <div className="cellbook__list">
                {this.state.books.map(book => {
                    return <Cellbook key={book.id} book={book}/>
                    
                })}
                    
            </div>

        )
    }
}
export default CellbookList;