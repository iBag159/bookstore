import React from 'react';
import Icon from '../Icon';

class Category extends React.Component {
    render() {
        return (
            <a className="category" href="/">
                <div className="category__icon-container">
                    <Icon svg={this.props.category.icon} classes="svg-icon" title="User"/>
                </div>
                <h3 className="category__name">{this.props.category.name}</h3>
                    {/*<p>{this.props.category.description}</p>*/}
            </a>
        );
    }
}

export default Category;