import './App.css';
import React, { useState, useEffect } from 'react';
import SuggestShops from './SuggestShops';
import FilterShops from './FilterShops';
import Question from './Question';
import axios from 'axios';


// index.jsから呼ばれる
function App() {
  useEffect(() =>{
    const url = `https://omise-kimeru-backend.onrender.com/hotpepper-proxy`
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        "large_area": "Z011"
      }
    };

    axios.get(url, config).then((res) => {
      const shops = res["data"]["results"]["shop"]
      console.log(shops)
      setShops(shops)
    })
  },[]);

  const genres = ["洋食","和食","中華","イタリアン・フレンチ","焼き肉・ホルモン","お好み焼き・もんじゃ","居酒屋","ラーメン"];
  const budgetOptions =["500","1000","2000","3000","4000","5000"];

  const [filterAttr, setFilterAttr] = useState({"checkedgenres": [], "budget": 1000})
  const [show, setShow] = useState(false);
  const [shops, setShops] = useState([]);
  const [filteredShops, setFilteredShops] = useState([]);

  const handleCheckboxChange= (genre) =>{ //checkboxの入力に基づいて配列にアイテムを加えてる
         setFilterAttr(prevfilterAttr => {
          if (prevfilterAttr.checkedgenres.includes(genre)){
              return{
                  ...prevfilterAttr,
                  "checkedgenres" :prevfilterAttr.checkedgenres.filter(g => g !== genre)
              }
          }else{
              return{
                  ...prevfilterAttr,
                  "checkedgenres" :[...prevfilterAttr.checkedgenres, genre]
              }
          }
      })
  }

  const handleBudgetChange=(event) =>{
         setFilterAttr(prevfilterAttr => ({
          ...prevfilterAttr,
          "budget" :parseInt(event.target.value)
      }))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          おみせきめーる
        </h1>
        <Question
          genres={ genres }
          budgetOptions={ budgetOptions }
          filterAttr={ filterAttr }
             setFilterAttr={ setFilterAttr }
          handleCheckboxChange={ handleCheckboxChange }
          handleBudgetChange={ handleBudgetChange }
        />


        <button onClick={() => {
          setFilteredShops(FilterShops(shops, filterAttr));
          setShow(true)
        }}>
          今日のご飯を決める！
        </button>
        {
          show && <SuggestShops filteredShops={ filteredShops } shops = { shops }/>
        }
      </header>
    </div>
  );
}

export default App;
