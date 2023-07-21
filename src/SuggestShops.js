import React, { useState } from 'react';


// showShopは一つのお店を表示する関数(になっていく)
function ShowShop(shopInfo){
    const [show, setShow] = useState(false);
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

function SuggestShops(props){
    const filteredShops = props.filteredShops;
    const shopInfo = filteredShops[Math.floor(Math.random() * filteredShops.length)];

    return ShowShop(shopInfo);
}

export default SuggestShops;
