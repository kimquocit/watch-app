import React, { Component } from 'react';

class Items extends Component {
    render() {
        return (
            <section className="section">
                <ul>
                    { this.props.children }
                </ul>
            </section>
        );
    }
}

export default Items;
