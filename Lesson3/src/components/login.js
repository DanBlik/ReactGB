import React from 'react';

const Login = props => {

  return (
    <div className="login">
      <h2>Login</h2>
      <input className="form-control" type="text" placeholder="Username"/>
      <input className="form-control" type="text" placeholder="Password"/>
      <button type="button" className="btn btn-success">Login</button>
    </div>
  );
};

export default Login;