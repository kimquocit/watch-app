import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div class="footer">
                <div class="container">
                    <div class="cssmenu">
                        <ul>
                            <li class="active"><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <ul class="social">
                        <li><a href=""> <i class="instagram"> </i> </a></li>
                        <li><a href=""><i class="fb"> </i> </a></li>
                        <li><a href=""><i class="tw"> </i> </a></li>
                    </ul>
                    <div class="clearfix"></div>
                    <div class="copy">
                        <p> &copy; 2015 Watches. All Rights Reserved | Design by <a href="http://w3layouts.com/" target="_blank">W3layouts</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
