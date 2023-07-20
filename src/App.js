import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import OmiseList from './OmiseList';

// index.jsから呼ばれる
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          おみせきめーる
        </h1>
        <OmiseList/> {/* <OmiseList></OmiseList>に同じ */}
      </header>
    </div>
  );
}

export default App;
