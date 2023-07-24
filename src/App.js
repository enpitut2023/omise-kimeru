import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

// index.jsから呼ばれる
function App() {
  return (
    <div className='App'>
      <Header />
          <Body />
      <Footer />
    </div>
  );
}

export default App;
