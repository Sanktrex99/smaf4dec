import React, { Component } from 'react';
import UserForm from '../../Components/Form';

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ border: '1px solid black' }}>
        <div className="title">Landing page for App de-Echo!!!</div>
        <a id="twitter-button" class="btn btn-block btn-social btn-twitter">
          <i class="fa fa-twitter"></i> Sign in with Twitter
        </a>
        <a href="http://localhost:4000/twitter/auth/callback">Sign in with Twitter</a>
        <div>
          <UserForm changePage={this.props.changePage} />
        </div>
      </div>
    );
  }
}
