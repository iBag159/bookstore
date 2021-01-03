import React from "react";
import "./style/Header.css";
import Icon from './Icon'

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__container container">
                    <div className="header__brand">
                        <span className="brand1">Book</span>
                        <span className="brand2">Store</span>
                    </div>
                    <ul className="header__main">
                        <li className="active"><a href="/home">Home</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/author">Author</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <ul className="header__tools">
                        <li><a href="/"><Icon svg="search" classes="svg-icon" title="User"/><span className="header__tools-badge">5</span></a></li>
                        <li><a href="/"><Icon svg="favorites" classes="svg-icon" title="Favorites"/></a></li>
                        <li><a href="/"><Icon svg="bag" classes="svg-icon" title="Bag"/></a></li>
                        <li><a href="/"><Icon svg="user" classes="svg-icon" title="User"/></a></li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;
