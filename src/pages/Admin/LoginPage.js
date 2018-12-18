import React, { Component } from 'react';
import { Input, FormGroup, Button } from 'reactstrap';
import AuthService from '../../services/AuthService';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      redirectToReferrer: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
  }
  componentWillMount() {
    if (this.Auth.loggedIn())
    this.props.history.push("/admin");
  }
  render() {
    if (this.state.redirectToReferrer) {
      this.props.history.push("/admin");
    }
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
              <div class="card-body">
                <h5 class="card-title text-center">Sign In</h5>
                <form class="form-signin" onSubmit={this.handleFormSubmit}>
                  <FormGroup>
                    <Input type="text" class="form-control" name="username" placeholder="Username" required autofocus onChange={this.handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <Input name="password" type="password" class="form-control" placeholder="Password" required onChange={this.handleChange} />
                  </FormGroup>
                  <button class="btn btn-lg btn-primary btn-block text-uppercase btn-outline-success" type="submit">Sign in</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.Auth.login(this.state.username, this.state.password)
      .then(res => {
        this.setState({ redirectToReferrer: true });
      })
      .catch(err => {
        alert(err);
      })
  }

  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
  }
}

export default LoginPage;