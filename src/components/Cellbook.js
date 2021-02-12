import React from "react";
import "./style/Cellbook.css";
import Icon from './Icon'
import { Link } from 'react-router-dom';
class Cellbook extends React.Component{
    render(){
        return(
            
                          
            <li>
                <div className="card__cellbook">  
                    
                    <div className="card__cellbook__img">
                        <img src={this.props.book.cover} alt="cover-page" />
                    <div className="book__img-menu">
                            <div className="book__img-container" ><Link 
                                to={{
                                    
                                  }}>
                                <Icon  svg="card_addcart" classes="svg-icon" title="AddCart"/></Link>
                            </div>
                            <div className="book__img-container"><Link 
                                to={{
                                    pathname: `/libro/${this.props.book.id}`,
                                    state: { book: this.props.book }
                                    
                                        
                                  }}>
                                <Icon  svg="card_see" classes="svg-icon" title="See"/></Link>
                            </div>
                            <div className="book__img-container"><a href="/">
                                <Icon  svg="card_favorite" classes="svg-icon" title="AddFavorite"/></a>
                            </div>
                    </div>
                </div>
                    
                    
                    <div className="container__cellbook__info">
                        <div className="cellbook__info-title"> {this.props.book.title}</div>
                        <div className="cellbook__info-author"><i>by</i> <span>{this.props.book.author}</span></div>
                        <div className="cellbook__info-price">S/. {this.props.book.price}</div>
                    </div>
                </div>  
            </li>
                            
                        

                 
             
        )
    }
}
    

export default Cellbook;