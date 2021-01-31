import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
    render() {
        return (
            <li>
                {
                    this.props.item.children && this.props.item.children.length > 0 
                    ? 
                    <a href="!#">
                        { this.props.item.tag }
                    </a> 
                    :
                    <Link to={this.props.item.path}>
                        { this.props.item.tag }
                    </Link>
                }
                
                {
                    this.props.item.children && this.props.item.children.length > 0 &&
                    <ul className="header__submenu">
                        {
                            this.props.item.children.map( ( item ) => {
                                return <Menu item={item} key={item.id}/>
                            }) 
                        }
                    </ul>
                }
            </li>
        )
    }
}

export default Menu;