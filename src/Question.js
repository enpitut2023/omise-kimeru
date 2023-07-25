import React, { useState } from 'react';
import "./App.css"
//UI実装
function Question(props){
    const genres = props.genres
    const budgetOptions = props.budgetOptions
    const filterAttr= props.filterAttr

    return(
        <div className="question">
        <p style={{fontSize : '150%'}}>食べたくないジャンル</p>
        <div
            style={{
                width: '200px',
                margin:'auto',
                textAlign: 'left'
            }}
        >
        {genres.map((genre, index) => (
                <div key={index}>
                    <label>
                        <input
                            type='checkbox'
                            value={genre}
                            checked={filterAttr.checkedgenres.includes(genre)}
                            onChange={() => props.handleCheckboxChange(genre)}
                        />
                        {genre}
                    </label>
                </div>
        ))
        }
        </div>
        <div className="budget-select">
            <p style={{fontSize : '150%'}}>予算</p>
            <select
            value={filterAttr.budget}
            onChange={props.handleBudgetChange}
            >
              {budgetOptions.map((budgetOption) => (
                <option
                key={budgetOption}
                value={budgetOption}>
                {budgetOption}
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