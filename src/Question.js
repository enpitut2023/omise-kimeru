import React from 'react';
import "./App.css"
import { BUDGET_CODES, GENRE_CODES } from './HotpepperConf';



function Question(props){
    const filterAttr= props.filterAttr
    const setFilterAttr= props.setFilterAttr

    const handleBudgetChange=(event) =>{
        setFilterAttr(prevfilterAttr => ({
        ...prevfilterAttr,
        "budgetCodeIdx": parseInt(event.target.value)
     }))
    }

    const handleCheckboxChange = (genre_code) =>{ //checkboxの入力に基づいて配列にアイテムを加えてる
        setFilterAttr(prevfilterAttr => {
         if (prevfilterAttr.excludeGenreCode.includes(genre_code)){
             return{
                 ...prevfilterAttr,
                 "excludeGenreCode" :prevfilterAttr.excludeGenreCode.filter(g => g !== genre_code)
             }
         }else{
             return{
                 ...prevfilterAttr,
                 "excludeGenreCode" :[...prevfilterAttr.excludeGenreCode, genre_code]
             }
         }
     })
 }

    return(
        <div className="question">
            <p style={{
                color:"brown",
                fontSize : '150%',
            }}>
                食べたくないジャンル
            </p>
            <div
                style={{
                    width: '250px',
                    margin:'auto',
                    textAlign: 'left'
                }}
            >
            {Object.keys(GENRE_CODES).map((code) => (
                    <div key={code}>

                        <label>
                            <input
                                style={{
                                    transform:"scale(2)",
                                    margin:"8px",
                                    marginLeft:"40px"
                                }}
                                type='checkbox'
                                value={code}
                                checked={filterAttr.excludeGenreCode.includes(code)}
                                onChange={() => handleCheckboxChange(code)}
                            />
                            {GENRE_CODES[code]}
                        </label>
                    </div>
            ))
            }
            </div>
            <div className="budget-select">
                <p style={{
                    color:"brown",
                    fontSize : '150%'
                }}>
                    予算
                </p>
                <select
                value={filterAttr["budgetCodeIdx"]}
                onChange={handleBudgetChange}
                >
                {BUDGET_CODES.map((budget_code, idx) => (
                    <option
                    key={budget_code.code}
                    value={idx}>
                    {budget_code.min} ~ {budget_code.max}
                    </option>
                ))

                }
                </select>
                円
            </div>
        </div>
    );
}

export default Question;
