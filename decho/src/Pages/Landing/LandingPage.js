import React, { Component } from 'react';
import UserForm from '../../Components/Form';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="title">Landing page for App de-Echo!!!</div>
        <a href="http://localhost:5000/auth/twitter">Sign in with Twitter</a>
        <div>
          <UserForm changePage={this.props.changePage} />
        </div>
      </div>
    );
  }
}
