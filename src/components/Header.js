import React from "react";

import "./style/Header.css";
import Icon from './Icon'
import Menu from './Header/Menu';

import { Link } from 'react-router-dom';

class Header extends React.Component {
    
    state = {
        
        


        menu : [
            {   id: "1",
                tag: "Inicio",
                path: "/",
            },
            {   id: "2",
                tag: "Tienda",
                path: "/tienda",
                children: [
                    {   id: "2-1",
                        tag: "Drama",
                        path: "/tienda/categoria/drama"
                    },
                    {   id: "2-2",
                        tag: "Romance",
                        path: "/tienda/categoria/romance"
                    },
                    {   id: "2-3",
                        tag: "Niños",
                        path: "/tienda/categoria/niños"
                    },
                    {   id: "2-4",
                        tag: "Ciencias",
                        path: "/tienda/categoria/ciencias"
                    },
                    {   id: "2-5",
                        tag: "Ver todas las categorias",
                        path: "/tienda/categorias"
                    },
        
                ]
            },
            {
                id: "5",
                tag: "Autor",
                path: "/autor"
            },
            {
                id: "6",
                tag: "Contacto",
                path: "/contacto"
            }
        ],
        active: false,
   
        
    }
    handleClick = () => {
        this.setState({
            active: !this.state.active
        })
    }
   
    
    render() {
        return (
            <header className="header">
                <div className="header__container container">
                    <div className="header__brand">
                        <span className="brand1">Book </span>
                        <span className="brand2">Store</span>
                    </div>
                    <nav>
                        <button className={ `btn-nav ${this.state.active ? "active" : ""}`} onClick={this.handleClick}>
                            <span className="btn-navicon"></span>
                        </button>
                        <ul className={ `header__main ${this.state.active ? "active" : ""}`}>
                            {
                                this.state.menu.map( ( item ) => {
                                    return <Menu item={item} key={item.id}/>
                                }) 
                            }
                        </ul> 
                    </nav>
                    <ul className="header__tools">
                        <li><a href="/"><Icon svg="search" classes="svg-icon" title="search"/></a></li>
                        <li><a href="/"><Icon svg="favorites" classes="svg-icon" title="Favorites"/><span className="header__tools-badge">0</span></a></li>
                        <li >
                            <Link to="/carrito-compra"><Icon svg="bag" classes="svg-icon" title="Bag"/>
                            <span className="header__tools-badge">0</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/login"><Icon id="Usericons" svg="user" classes="svg-icon" title="User"/></Link>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;
