import React, { useState, useEffect } from 'react';
import axios from 'axios';


// axiosのインスタンス作成
const KEY =  process.env.API_KEY
const hotpepper = axios.create ({
    baseURL: 'https://webservice.recruit.co.jp/hotpepper/large_area/v1/?key=d9a6f98b0866d869&format=json',
})

// curl https://webservice.recruit.co.jp/hotpepper/large_area/v1/?key=d9a6f98b0866d869&format=json | jq
// curl https://webservice.recruit.co.jp/hotpepper/large_area/v1/?key=d9a6f98b0866d869&format=json
const fetchSearchData = async() =>{
    //大エリアコード=Z011(東京)のお店を検索
        return await hotpepper.get('')
}


    // params: {
    //     key:KEY,
    //     large_area:'Z011',
    //     format: 'json'  
    //  }

function OmiseList(){
    const [show, setShow] = useState(false);

    
    useEffect(() =>{
        fetchSearchData().then((res) => {
            console.log(res)
        })
    },[])



    return(
        <div>
            <button onClick={() => setShow(true)}>今日のご飯は？</button>



            {/* {show && <h2>今日のご飯は{omiseList1[Math.floor(Math.random() * omiseList1.length)]}</h2>} */}
        </div>
    );
}

export default OmiseList;