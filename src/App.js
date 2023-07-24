import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Data from "./lunch.json";
import SuggestShops from './SuggestShops';
import FilterShops from './FilterShops';
import Question from './Question';




// index.jsから呼ばれる
function App() {
  const genres = ["洋食","和食","中華","イタリアン・フレンチ","焼き肉・ホルモン","お好み焼き・もんじゃ","居酒屋","ラーメン"]
  const budgetOptions =["500","1000","2000","3000","4000","5000"]

  const [response, setResponse] = useState({checkedgenres: [], budget: 500})
  const [show, setShow] = useState(false);

  const shops = Data["results"]["shop"];

  const filterAttr = {
      "maxBuget": 1500,
      "excludeGenre": ["ラーメン", "洋食"]
  };

  let filteredShops

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          おみせきめーる
        </h1>
        <Question
          genres={ genres } 
          budgetOptions={ budgetOptions } 
          response={ response }
          setResponse={ setResponse }  
        />
        
        <button onClick={() => {
          filteredShops = FilterShops(shops, filterAttr);
          setShow(true)
        }}>
          今日のご飯は？
        </button>
        {
          show && <SuggestShops filteredShops={ filteredShops }/>
        }
      </header>
    </div>
  );
}

export default App;
