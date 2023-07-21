import React, { useState } from 'react';
import Data from "./lunch.json";


function OmiseList(){
    const [show, setShow] = useState(false);
    const shopInfo = Data["results"]["shop"][Math.floor(Math.random() * Data["results"]["shop"].length)]
    
    return(
        <div>
            <button onClick={() => setShow(true)}>今日のご飯は？</button>
            {show &&
            <div>
            <h2>今日のご飯は「{shopInfo["name"]}」です。</h2>
            <p>予算:{shopInfo["budget"]["average"]}円</p>
            <p>ジャンル:{shopInfo["genre"]["name"]}</p>            
            </div>
            }
            {/* {show && <h2>今日のご飯は{omiseList1[Math.floor(Math.random() * omiseList1.length)]}</h2>} */}
        </div>
    );
}

export default OmiseList;