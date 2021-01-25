import React from 'react';
import './App.css';
import Header from './Header';
import { TextField } from './TextField';

function App() {
  return (
    <div className="App">
      <Header />

      <header className="App-header">
        <TextField
          text={'hello'}
          person={{ firstName: '', lastName: '' }}
          handleChange={(e) => {
            e.preventDefault();
          }}
        />
      </header>
    </div>
  );
}

export default App;
