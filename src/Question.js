import React, { useEffect, useState } from 'react';

//UI実装
function Question(props){
    const genres = props.genres
    const budgetOptions = props.budgetOptions
    const response= props.response 
    const setResponse=props.setRespose 

    const handleCheckboxChange= (genre) =>{
        setResponse(prevResponse => {
            if (prevResponse.checkedgenres.includes(genre)){
                return{
                    ...prevResponse,
                    checkedgenres:prevResponse.checkedgenres.filter(g => g !=genre) 
                } 
            }else{
                return{
                    ...prevResponse,
                    checkedgenres:[...prevResponse.checkedgenres, genre]
                } 
            }
        })
    } 

    const handleBudgetChange=(event) =>{
        setResponse(prevResponse => ({
            ...prevResponse,
            budget:parseInt(event.target.value)
        }))
    }

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
                            onChange={() => handleCheckboxChange(genre)}
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
            onChange={handleBudgetChange}
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
        </div>
        </div>
    );
}

export default Question;