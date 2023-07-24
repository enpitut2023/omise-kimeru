import React , { useEffect, useState } from 'react';
import Data from "./lunch.json";
import SuggestShops from './SuggestShops';
import Questionnaire from './Questionnaire';

function Body(){
    const [finish, setFinish] = useState(false);
    const [filterAttr, setFilterAttr] = useState({"checkedgenres": [], "budget": 1000})
    const [filteredShops, setFilteredShops] = useState([])
    const shops = Data["results"]["shop"];

    if (!finish){
        return <Questionnaire 
        shops = {shops}
         setFinish={setFinish}
          filterAttr={filterAttr} 
          setFilterAttr={setFilterAttr}
          filteredShops={filteredShops}
          setFilteredShops={setFilteredShops}
          />
    }else{
        return <SuggestShops filteredShops={ filteredShops } shops = { shops }/>
    }

}

export default Body;