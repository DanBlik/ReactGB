/* import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
  return <div>
  <h1>Hello react</h1>
  <h2>First app on React ^_^</h2>
  </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root')); */

import {Developer} from './Developer';
let Misha = new Developer('Misha', 22);
console.log(Misha);