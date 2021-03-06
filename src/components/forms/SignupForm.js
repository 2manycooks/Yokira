import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SignupForm(props) {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

    return (
      <form onSubmit={e => props.handle_signup(e, {username, password})}>
        <h4>Sign Up</h4>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value1={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value2={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    );
  }

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};