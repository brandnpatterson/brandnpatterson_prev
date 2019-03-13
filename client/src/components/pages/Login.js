import React, { Component } from 'react';

class Login extends Component {
  render() {
    function onSubmit(event) {
      event.preventDefault();
    }

    return (
      <form onSubmit={onSubmit} method="post" action="">
        <div className="form">
          <h1>Login</h1>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default Login;
