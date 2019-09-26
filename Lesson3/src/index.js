import React from 'react';
import ReactDOM from 'react-dom';

import Login from './components/login';
import Menu from './components/menu';

const App = props => {

  return (
    <div>
      <Menu />
      <Login />
    </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root'));
