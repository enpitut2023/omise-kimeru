import React, { useEffect, useState } from 'react';

//UI実装
function Question(){
    const genres = ["洋食","和食","中華","イタリアン・フレンチ","焼き肉・ホルモン","お好み焼き・もんじゃ","居酒屋","ラーメン"]
    const budgetOptions =["500","1000","2000","3000","4000","5000","上限なし"]

    const [response, setResponse] = useState({checkedgenres: [], budget: 500})

    const handleChangeCheckbox=(genre) =>{
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

    const handleChangeBudget=(event) =>{
        setResponse(prevResponse => ({
            ...prevResponse,
            budget:parseInt(event.target.value)
        }))
    }
    return(
        <div>
        <p>食べたくないジャンル</p>
        {genres.map((genre, index) => {
                <div key={index}>
                    <label>
                        <input
                            type='checkbox'
                            value={genre}
                            checked={response.checkedgenres.includes(genre)}
                            onChange={() => handleChangeCheckbox(genre)}
                        />
                    </label>
                    
                </div>
            })
        }
        <div>
            予算
            <select 
            value={response.budget}
            onChange={handleChangeBudget}
            >
              {budgetOptions.map((budgetOption) => {
                <option 
                key={budgetOption} 
                value={budgetOption}>
                {budgetOption}
                </option> 
              })

              }  
            </select>
        </div>
        </div>
    );
}

export default Question;