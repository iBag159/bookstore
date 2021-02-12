import React from "react";
import "./style/Book.css";
import Icon from './Icon'


class Book extends React.Component{
    render(){
        return(
            
                          
            
                <div className="container_seebook">  
                    <div className="seebook__img">
                            <img src={this.props.book.cover} alt="cover-page" />    
                    </div>
                      
                    <div className="seebook-info"> 
                        <div className="title_seebook">
                            <div className="seebook-info-title"> {this.props.book.title}</div>
                            <div className="seebook__img-favorite"><a href="/"><Icon  svg="card_favorite" classes="svg-icon" title="AddFavorite"/></a></div>
                        </div>    
                        <div className="seebook__info-author"><i>by</i> <span>{this.props.book.author}</span></div>
                        <div className="seebook__info-price">S/. {this.props.book.price}</div>
                        <div className="seebook__info-resume"><p>Esta es la historia resumen del libro {this.props.book.title} que te contara la travesia al fin del mundo, ponte atento por que te llevará a lugares inimaginables por los humanos, esta historia es inpirada en el autor que dice ser un amante de este genero de libros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor velit id bibendum molestie. Sed congue volutpat volutpat. Nam aliquam, eros ut suscipit fringilla, diam ipsum tristique eros, in aliquet ante nulla ac ex. Nulla in libero tellus. Mauris ornare ligula vitae nunc porta, a tincidunt tortor eleifend. </p></div>
                        
                        <div className="container-seebook-addcart">
                            <a href="/" className="seebook-addcart">
                                <Icon svg="card_addcart" classes="svg-icon" title="Add_cart"/>
                                <span>Agregar al carrito</span>
                            </a>
                         </div>
                    
                    </div>

                    
                </div>  
           
                            
                        

                 
             
        )
    }
}
    

export default Book;