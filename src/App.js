import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {
  const [members, setMembers] = useState('');

  const addNewMember = data => {
    const newMember = {
      name: data.name,
      email: data.email,
      role: data.role
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Form addNewMember={addNewMember}/>
      </header>
    </div>
  );
}

export default App;
