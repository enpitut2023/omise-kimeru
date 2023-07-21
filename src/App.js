import logo from './logo.svg';
import React, { useState } from 'react';
import OmiseList from './OmiseList';
import Question from './Question';

// index.jsから呼ばれる
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          おみせきめーる
        </h1>
        <OmiseList/> {/* <OmiseList></OmiseList>に同じ */}
        <Question />
      </header>
    </div>
  );
}

export default App;
