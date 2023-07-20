import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const omiseList = [
  "百香亭",
  "スタバ"
];

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          おみせきめーる
        </h1>
        <button onClick={() => setShow(true)}>今日のご飯は？</button>
            {show && <h2>今日のご飯は{omiseList[Math.floor(Math.random() * omiseList.length)]}</h2>}
      </header>
    </div>
  );
}

export default App;
