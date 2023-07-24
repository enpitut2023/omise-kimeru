import React from 'react';
import FilterShops from './FilterShops'
import Question from './Question';

function Questionnaire(props){
  const genres = ["洋食","和食","中華","イタリアン・フレンチ","焼き肉・ホルモン","お好み焼き・もんじゃ","居酒屋","ラーメン"]
  const budgetOptions =["500","1000","2000","3000","4000","5000"]

  const filterAttr = props.filterAttr
  const handleCheckboxChange= (genre) =>{ //checkboxの入力に基づいて配列にアイテムを加えてる
         props.setFilterAttr(prevfilterAttr => {
          if (prevfilterAttr.checkedgenres.includes(genre)){
              return{
                  ...prevfilterAttr,
                  "checkedgenres" :prevfilterAttr.checkedgenres.filter(g => g !=genre)
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
        props.setFilterAttr(prevfilterAttr => ({
          ...prevfilterAttr,
          "budget" :parseInt(event.target.value)
      }))
  }

  return (
    <div className="App">
      
        <Question
          genres={ genres }
          budgetOptions={ budgetOptions }
          filterAttr={ filterAttr }
          setFilterAttr={ props.setFilterAttr }
          handleCheckboxChange={ handleCheckboxChange }
          handleBudgetChange={ handleBudgetChange }
        />

        <button onClick={() => {
          props.setFilteredShops(FilterShops(props.shops, filterAttr));
          props.setFinish(true)
        }}>
          今日のご飯を決める！
        </button>
      
    </div>
    )
}

export default Questionnaire;