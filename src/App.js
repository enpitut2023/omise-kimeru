import logo from './logo.svg';
import React, { useState } from 'react';
import OmiseList from './OmiseList';
import Question from './Question';

// index.jsから呼ばれる
function App() {
  const genres = ["洋食","和食","中華","イタリアン・フレンチ","焼き肉・ホルモン","お好み焼き・もんじゃ","居酒屋","ラーメン"]
  const budgetOptions =["500","1000","2000","3000","4000","5000"]

  const [response, setResponse] = useState({checkedgenres: [], budget: 500})

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          おみせきめーる
        </h1>
        <OmiseList/> {/* <OmiseList></OmiseList>に同じ */}
        <Question
          genres={ genres } 
          budgetOptions={ budgetOptions } 
          response={ response }
          setResponse={ setResponse }  
        />
      </header>
    </div>
  );
}

export default App;
