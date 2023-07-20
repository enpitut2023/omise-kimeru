import React, { useState } from 'react';

const omiseList1 = [
    "百香亭",
    "スタバ"
  ];

function OmiseList(){
    const [show, setShow] = useState(false);
    return(
        <div>
            <button onClick={() => setShow(true)}>今日のご飯は？</button>
            {show && <h2>今日のご飯は{omiseList1[Math.floor(Math.random() * omiseList1.length)]}</h2>}
        </div>
    );
}

export default OmiseList;