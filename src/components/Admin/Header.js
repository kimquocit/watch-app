import React, { Component } from 'react';
import AuthService from '../../services/AuthService';
import { withRouter } from 'react-router-dom';
//const Auth = new AuthService(); 

class Header extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
      }
    handleLogout() {
        console.log();
        this.Auth.logout();
        this.props.history.replace("/admin/login");
    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Dashboard</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/admin">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/admin/categories">Categories</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.handleLogout.bind(this)}>Logout</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default withRouter(Header);
