import React, { Component } from 'react';

class Item extends Component {
    render() {
        var { item } = this.props;
        return (
            <li class="simpleCart_shelfItem">
                <a class="cbp-vm-image" href="single.html">
                    <div class="view view-first">
                        <div class="inner_content clearfix">
                            <div class="product_image">
                                <div class="mask1"><img src="/images/m1.jpg" alt="image" class="img-responsive zoom-img" /></div>
                                <div class="mask">
                                    <div class="info">Quick View</div>
                                </div>
                                <div class="product_container">
                                    <h4>{item.name}</h4>
                                    <p>{item.category}</p>
                                    <div class="price mount item_price">${item.price}</div>
                                    <a class="button item_add cbp-vm-icon cbp-vm-add" href="#">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        );
    }
}

export default Item;
