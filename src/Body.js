import React , { useState, useEffect } from 'react';
import SuggestShops from './SuggestShops';
import Questionnaire from './Questionnaire';
import axios from 'axios';
import { BUDGET_CODES, GENRE_CODES } from './HotpepperConf';
import UserSwitch from './UserSwitch';

function Body(){
    const [finish, setFinish] = useState(false);
    const [filterAttr, setFilterAttr] = useState({"excludeGenreCode": [], "budgetCodeIdx": 3})
    const [userAttrs, setUserAttrs] = useState([{"excludeGenreCode": [], "budgetCodeIdx": 3}])
    const [filteredShops, setFilteredShops] = useState([])
    const [userIndex, setUserIndex] = useState(0)


    const getShops = async () => {
        const includeGenreCodes = Object.keys(GENRE_CODES).filter((genre) => {
          return !(filterAttr["excludeGenreCode"].includes(genre["code"]))
        });

         if (includeGenreCodes.length === 0) {
          return;
        }

        // ホットペッパーAPIの仕様上、ジャンルコードは2つまでしか指定できない
        // 2つずつに分割 ex: [[G001, G002], [G003, G004], ...]
        let includeGenreCodesByTwo = [];
        for (let i = 0; i < includeGenreCodes.length; i += 2) {
          includeGenreCodesByTwo.push(includeGenreCodes.slice(i, i + 2))
        }

        const url = `https://omise-kimeru-backend.onrender.com/hotpepper-proxy`
        const resShops =  await Promise.all(includeGenreCodesByTwo.map(async (includeGenreCodes) => {
          const config = {
            headers: {
              'Content-Type': 'application/json',
            },
            params: {
              //"large_area": "SA15"
              large_area: "Z011",
              budget: BUDGET_CODES[filterAttr["budgetCodeIdx"]]["code"],
              genre: includeGenreCodes.join(",")
            }
          };
          return await axios.get(url, config);
        })).then((responses) => {
          let resShops = [];
          responses.forEach((res) => {
            resShops.push(...res["data"]["results"]["shop"]);
          })
            return resShops;
        }).catch((err) => {
          console.log(err)
        })
        return resShops;
      }

      useEffect(() => {
        // 当たり前に現在のユーザーの属性をfilterAttrにセットする
        setFilterAttr(userAttrs[userIndex] || { "excludeGenreCode": [], "budgetCodeIdx": 3 });
    }, [userIndex, userAttrs]);
  
    const handleQuestionnaireComplete = () => {
      // 現在のユーザーの属性をuserAttrsに更新
      const newUserAttrs = [...userAttrs];
      newUserAttrs[userIndex] = filterAttr;
      setUserAttrs(newUserAttrs);

      // 最後のユーザーなら、全員のアンケートが完了していると判断
      if (userIndex === userAttrs.length - 1) {
          setFinish(true);
      } else {
          // そうでない場合、次のユーザーに移動
          setUserIndex(userIndex + 1);
      }
    };


    if (!finish){
        return (
        <>

        <UserSwitch userIndex={userIndex} setUserIndex={setUserIndex}/>

        <Questionnaire
        setFinish={setFinish}
        filterAttr={filterAttr}
        setFilterAttr={setFilterAttr}
        setFilteredShops={setFilteredShops}
        getShops={getShops}
        />
        </>
        );
        
    }else{
        return <SuggestShops 
        filteredShops={ filteredShops } 
        setFilteredShops={ setFilteredShops } 
        setFinish={setFinish} />
    }

}

export default Body;
