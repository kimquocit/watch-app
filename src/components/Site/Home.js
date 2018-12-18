import React, { Component } from 'react';
import ProductsContainer from '../../containers/ProductsContainer';

class HomePage extends Component {
    render() {
        return (
            <div>
                <div class="col-md-4 sidebar_men">
                    <h3>Categories</h3>
                    <ul class="product-categories color"><li class="cat-item cat-item-42"><a href="#">Dresses</a> <span class="count">(14)</span></li>
                        <li class="cat-item cat-item-60"><a href="#">Glasses</a> <span class="count">(2)</span></li>
                        <li class="cat-item cat-item-63"><a href="#">Gloves</a> <span class="count">(2)</span></li>
                        <li class="cat-item cat-item-54"><a href="#">Jeans</a> <span class="count">(8)</span></li>
                        <li class="cat-item cat-item-55"><a href="#">Shoes</a> <span class="count">(11)</span></li>
                        <li class="cat-item cat-item-64"><a href="#">Shorts</a> <span class="count">(3)</span></li>
                        <li class="cat-item cat-item-61"><a href="#">Skirts</a> <span class="count">(3)</span></li>
                        <li class="cat-item cat-item-56"><a href="#">Sweaters</a> <span class="count">(6)</span></li>
                        <li class="cat-item cat-item-57"><a href="#">T-Shirts</a> <span class="count">(13)</span></li>
                        <li class="cat-item cat-item-58"><a href="#">Tops</a> <span class="count">(7)</span></li>
                        <li class="cat-item cat-item-62"><a href="#">Watchers</a> <span class="count">(2)</span></li>
                        <li class="cat-item cat-item-41"><a href="#">Women</a> <span class="count">(17)</span></li>
                    </ul>
                    <h3>Colors</h3>
                    <ul class="product-categories color"><li class="cat-item cat-item-42"><a href="#">Green</a> <span class="count">(14)</span></li>
                        <li class="cat-item cat-item-60"><a href="#">Blue</a> <span class="count">(2)</span></li>
                        <li class="cat-item cat-item-63"><a href="#">Red</a> <span class="count">(2)</span></li>
                        <li class="cat-item cat-item-54"><a href="#">Gray</a> <span class="count">(8)</span></li>
                        <li class="cat-item cat-item-55"><a href="#">Green</a> <span class="count">(11)</span></li>
                    </ul>
                    <h3>Sizes</h3>
                    <ul class="product-categories color"><li class="cat-item cat-item-42"><a href="#">L</a> <span class="count">(14)</span></li>
                        <li class="cat-item cat-item-60"><a href="#">M</a> <span class="count">(2)</span></li>
                        <li class="cat-item cat-item-63"><a href="#">S</a> <span class="count">(2)</span></li>
                        <li class="cat-item cat-item-54"><a href="#">XL</a> <span class="count">(8)</span></li>
                        <li class="cat-item cat-item-55"><a href="#">XS</a> <span class="count">(11)</span></li>
                    </ul>
                    <h3>Price</h3>
                    <ul class="product-categories"><li class="cat-item cat-item-42"><a href="#">200$-300$</a> <span class="count">(14)</span></li>
                        <li class="cat-item cat-item-60"><a href="#">300$-400$</a> <span class="count">(2)</span></li>
                        <li class="cat-item cat-item-63"><a href="#">400$-500$</a> <span class="count">(2)</span></li>
                        <li class="cat-item cat-item-54"><a href="#">500$-600$</a> <span class="count">(8)</span></li>
                        <li class="cat-item cat-item-55"><a href="#">600$-700$</a> <span class="count">(11)</span></li>
                    </ul>
                </div>
                <div class="col-md-8 mens_right">
                    <div class="dreamcrub">
                        <ul class="breadcrumbs">
                            <li class="home">
                                <a href="index.html" title="Go to Home Page">Home</a>&nbsp;
							<span>&gt;</span>
                            </li>
                            <li class="home">&nbsp;
                                Men / Women&nbsp;
						</li>
                        </ul>
                        <ul class="previous">
                            <li><a href="index.html">Back to Previous Page</a></li>
                        </ul>
                        <div class="clearfix"></div>
                    </div>
                    <div class="mens-toolbar">
                        <ul class="women_pagenation dc_paginationA dc_paginationA06">
                            <li><a href="#" class="previous">Page : </a></li>
                            <li class="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                        </ul>
                        <div class="clearfix"></div>
                    </div>
                    <div id="cbp-vm" class="cbp-vm-switcher cbp-vm-view-grid">
                        <div class="cbp-vm-options">
                            <a href="#" class="cbp-vm-icon cbp-vm-grid cbp-vm-selected" data-view="cbp-vm-view-grid" title="grid">Grid View</a>
                            <a href="#" class="cbp-vm-icon cbp-vm-list" data-view="cbp-vm-view-list" title="list">List View</a>
                        </div>
                        <div class="clearfix"></div>
                        <ProductsContainer />
                    </div>
                    <script src="js/cbpViewModeSwitch.js" type="text/javascript"></script>
                    <script src="js/classie.js" type="text/javascript"></script>
                </div>
            </div>
        );
    }
}

export default HomePage;
