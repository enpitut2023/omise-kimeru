import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Data from "./lunch.json";
import SuggestShops from './SuggestShops';
import FilterShops from './FilterShops';

// index.jsから呼ばれる
function App() {

  const shops = Data["results"]["shop"];

  const filterAttr = {
      "maxBuget": 1500,
      "excludeGenre": ["ラーメン", "洋食"]
  };

  const filteredShops = FilterShops(shops, filterAttr);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          おみせきめーる
        </h1>
        <SuggestShops filteredShops={ filteredShops }/>
      </header>
    </div>
  );
}

export default App;
