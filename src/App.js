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
      <footer><a href="http://webservice.recruit.co.jp/"><img src="http://webservice.recruit.co.jp/banner/hotpepper-s.gif" alt="ホットペッパー Webサービス" width="135" height="17" border="0" title="ホットペッパー Webサービス"/></a></footer>
    </div>
  );
}

export default App;
