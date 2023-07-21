import React, { useState } from 'react';
import Data from "./lunch.json";


function filterShops(shops, filterAttr){
    const filteredShops = shops.filter((shop) =>{

        return(
            // 予算内かどうか
            shop["budget"]["average"] < filterAttr["maxBuget"] &&
            //除くべきジャンルかどうか
            !(filterAttr["excludeGenre"].includes(shop["genre"]["name"]))
        );
    })



    return filteredShops;
}

// OmiseListは一つのお店を表示する関数(になっていく)
function OmiseList(){
    const [show, setShow] = useState(false);

    const shops = Data["results"]["shop"];

    const filterAttr = {
        "maxBuget": 1500,
        "excludeGenre": ["ラーメン", "洋食"]
    };

    const filteredShops = filterShops(shops, filterAttr);
    const shopInfo = filteredShops[Math.floor(Math.random() * filteredShops.length)];

    return(
        <div>
            <button onClick={() => setShow(true)}>今日のご飯は？</button>
            {show &&
            <div>
            <a href={shopInfo["urls"]["pc"]}> <h2>今日のご飯は「{shopInfo["name"]}」です。</h2></a>
            <p>予算:{shopInfo["budget"]["average"]}円</p>
            <p>ジャンル:{shopInfo["genre"]["name"]}</p>
            </div>
            }
            {/* {show && <h2>今日のご飯は{omiseList1[Math.floor(Math.random() * omiseList1.length)]}</h2>} */}
        </div>
    );
}

export default OmiseList;
