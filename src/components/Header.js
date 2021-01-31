import React from "react";
import "./style/Header.css";
import Icon from './Icon'
import Menu from './Header/Menu'

class Header extends React.Component {
    state = {
        menu : [
            {   id: "1",
                tag: "Home",
                path: "/",
            },
            {   id: "2",
                tag: "Shop",
                path: "/shop",
                children: [
                    {   id: "2-1",
                        tag: "Subitem 1",
                        path: "/shop/subitem1"
                    },
                    {   id: "2-2",
                        tag: "Subitem 2",
                        path: "/shop/subitem2"
                    },
                    {   id: "2-3",
                        tag: "Subitem 3",
                        path: "/shop/subitem3"
                    },
        
                ]
            },
            {
                id: "5",
                tag: "Author",
                path: "/author"
            },
            {
                id: "6",
                tag: "Contact",
                path: "/contact"
            }
        ],
        active: false
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
                        <li><a href="/"><Icon svg="search" classes="svg-icon" title="User"/></a></li>
                        <li><a href="/"><Icon svg="favorites" classes="svg-icon" title="Favorites"/><span className="header__tools-badge">5</span></a></li>
                        <li><a href="/"><Icon svg="bag" classes="svg-icon" title="Bag"/><span className="header__tools-badge">10</span></a></li>
                        <li><a href="/"><Icon svg="user" classes="svg-icon" title="User"/></a></li>
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;
