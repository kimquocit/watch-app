import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div class="men_banner">
                <div class="container">
                    <div class="header_top">
                        <div class="header_top_left">
                            <div class="box_11"><a href="checkout.html">
                                <h4><p>Cart: <span class="simpleCart_total"></span> (<span id="simpleCart_quantity" class="simpleCart_quantity"></span> items)</p><img src="images/bag.png" alt="" /><div class="clearfix"> </div></h4>
                            </a></div>
                            <p class="empty"><a href="javascript:;" class="simpleCart_empty">Empty Cart</a></p>
                            <div class="clearfix"> </div>
                        </div>
                        <div class="header_top_right">
                            <div class="lang_list">
                                <select tabindex="4" class="dropdown">
                                    <option value="" class="label" value="">$ Us</option>
                                    <option value="1">Dollar</option>
                                    <option value="2">Euro</option>
                                </select>
                            </div>
                            <ul class="header_user_info">
                                <a class="login" href="login.html">
                                    <i class="user"> </i>
                                    <li class="user_desc">My Account</li>
                                </a>
                                <div class="clearfix"> </div>
                            </ul>


                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="header_bottom">
                        <div class="logo">
                            <h1><a href="index.html"><span class="m_1">W</span>atches</a></h1>
                        </div>
                        <div class="menu">
                            <ul class="megamenu skyblue">
                                <li class="active grid"><a class="color2" href="#">Mens</a></li>
                                <li><a class="color4" href="#">womens</a></li>
                                <li><a class="color10" href="brands.html">Brands</a></li>
                                <li><a class="color3" href="index.html">Sale</a></li>
                                <li><a class="color7" href="404.html">News</a></li>
                                <div class="clearfix"> </div>
                            </ul>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
