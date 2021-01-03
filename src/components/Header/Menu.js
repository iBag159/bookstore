import React from "react";

class Menu extends React.Component {
    render() {
        return (
            <li>
                <a href={this.props.item.path}>
                    { this.props.item.tag }
                </a>
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