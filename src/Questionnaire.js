import React from 'react';
import Question from './Question';

function Questionnaire(props){
  const filterAttr = props.filterAttr
  const setFilterAttr = props.setFilterAttr
  const setFilteredShops = props.setFilteredShops
  const setFinish = props.setFinish
  const getShops = props.getShops


  return (
    <div
    className="App"
    style={{
        textAlign : 'center',
        backgroundColor : 'rgb(245,235,235)',
        padding : '5%'
    }}>
      
        <Question
          filterAttr={ filterAttr }
          setFilterAttr={ setFilterAttr }
        />

        <button
        style={{
          padding : '5%'
        }}
        onClick={async () => {
          const filteredShops = await getShops();
          setFilteredShops(filteredShops);
          setFinish(true)
        }}>
          今日のご飯を決める！
        </button>
    </div>
    )
}

export default Questionnaire;
