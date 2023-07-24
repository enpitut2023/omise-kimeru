import React, { useEffect, useState } from 'react';
import "./App.css"
//UI実装
function Questionnaire(props){
    const genres = props.genres
    const budgetOptions = props.budgetOptions
    const filterAttr= props.filterAttr
    const setfilterAttr=props.setRespose

    return(
        <div class="question">
        <p>食べたくないジャンル</p>
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
        <div class="budget-select">
            予算:
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

export default Questionnaire;