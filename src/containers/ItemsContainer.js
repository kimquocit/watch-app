import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from './../components/Site/Items';
import Item from './../components/Site/Item';
import axios from 'axios';

class ItemsContainer extends Component {
    state = {
        items: []
    }

    render() {
        var items = this.state.items;
        return (
            <Items>
                {this.showItems(items)}
            </Items>
        );
    }

    showItems(items) {
        var result = null;
        if (items.length > 0) {
            result = items.map((item, index) => {
                return <Item
                    key={index}
                    item={item}
                />
            });
        }
        return result;
    }

    componentWillMount() {
        this.loadItems();
    }

    loadItems() {
        axios.get('http://localhost:3000/items').then((response) => {
            this.setState({
                items: response.data
            })
        });
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(ItemsContainer);
