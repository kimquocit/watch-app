import React, { Component } from 'react';
import axios from 'axios';

class Sidebar extends Component {
    state = {
        items: []
    }
    componentWillMount() {
        this.loadItems();
    }
    loadItems() {
        axios.get('http://localhost:3000/categories').then((response) => {
            this.setState({
                items: response.data
            })
        });
    }
    render() {
        return (
            <div class="col-md-4">
                <h3>Categories</h3>
                <ul class="product-categories color">
                    {this.state.items.map((item) => {
                        return (
                            <li class="cat-item"><a href="#">{item.name}</a></li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Sidebar;
