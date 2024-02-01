import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // just a comment
  const testFunc = () => {
    console.log('hello world 1')
    console.log('hello world 2')
    console.log('hello world 3')
    console.log('hello world 4')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={testFunc}>Click me</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!!!!😀😜
        </a>
      </header>
    </div>
  );
}

export default App;
