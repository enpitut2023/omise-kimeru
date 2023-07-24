import React, { useEffect, useState } from 'react';

//UI実装
function Question(props){
    const genres = props.genres
    const budgetOptions = props.budgetOptions
    const response= props.response 
    const setResponse=props.setRespose 

    return(
        <div>
        <p>食べたくないジャンル</p>
        {genres.map((genre, index) => (
                <div key={index}>
                    <label>
                        <input
                            type='checkbox'
                            value={genre}
                            checked={response.checkedgenres.includes(genre)}
                            onChange={() => props.handleCheckboxChange(genre)}
                        />
                        {genre}
                    </label>
                    
                </div>
        ))
        }
        <div>
            予算
            <select 
            value={response.budget}
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