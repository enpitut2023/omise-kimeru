import React , { useEffect, useState } from 'react';
import SuggestShops from './SuggestShops';
import Questionnaire from './Questionnaire';
import axios from 'axios'
import axiosJsonpAdapter from "axios-jsonp";
import { BUDGET_CODES, GENRE_CODES } from './HotpepperConf';
import GeolocationModal from './GeolocationModal';

const TSUKUBA_GEOLACATION = {
    lat: 36.0834,
    lng: 140.0766
}

function Body(){
    const [finish, setFinish] = useState(false);
    const [filterAttr, setFilterAttr] = useState({
        "excludeGenreCode": [],
        "budgetCodeIdx": 3
    })
    const [geoLocation, setGeoLocation] = useState(TSUKUBA_GEOLACATION)

    const [filteredShops, setFilteredShops] = useState([])

    const [isGetGeolocation, setIsGetGeolocation] = useState(true)
    const [showGeoModal, setShowGeoModal] = useState(false)
    useEffect(() => {
      getGeolocation()
    }, [])


    useEffect(() => {
        setShowGeoModal(!isGetGeolocation)
    }, [isGetGeolocation])


  const getGeolocation = async () => {
      if(navigator.geolocation){ //対応している場合のみ緯度経度取得
          await navigator.geolocation.getCurrentPosition((position) =>{
            setGeoLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
          },
            (error) => {
                console.log(error)
                setIsGetGeolocation(false)
            }
          )
      }else{
        console.log("geoLocation failed")
        setIsGetGeolocation(false)
      }
  }

    const getShops = async () => {
        const genreCodes = Object.keys(GENRE_CODES);
        const includeGenreCodes = genreCodes.filter((genre_code) => {
            return !(filterAttr["excludeGenreCode"].includes(genre_code))
        });

         if (includeGenreCodes.length === 0) {
          return [];
        }


        // ホットペッパーAPIの仕様上、ジャンルコードは2つまでしか指定できない
        // 2つずつに分割 ex: [[G001, G002], [G003, G004], ...]
        let includeGenreCodesByTwo = [];
        let shopNames = [];
        for (let i = 0; i < includeGenreCodes.length; i += 2) {
          includeGenreCodesByTwo.push(includeGenreCodes.slice(i, i + 2))
        }

        
        const apiKey = process.env.REACT_APP_API_KEY;
        const url = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${apiKey}`
        const resShops =  await Promise.all(includeGenreCodesByTwo.map(async (includeGenreCodes) => {
          const config = {
            adapter: axiosJsonpAdapter,
            params: {
                lat: geoLocation["lat"],
                lng: geoLocation["lng"],
                count: 100,
                range: 3,
                budget: BUDGET_CODES[filterAttr["budgetCodeIdx"]]["code"],
                genre: includeGenreCodes.join(",")
            }
          };

          return await axios.get(`${url}&format=jsonp`, config);
        })).then((responses) => {
          let resShops = [];
          responses.forEach((res) => {
            if (res.data["results"]["shop"] === undefined) {
              return;
            }

            resShops.push(...res.data["results"]["shop"]);
          })

          const refilterdShop = resShops.filter((shop) => {
            // クエリパラメータで指定したジャンルコードに一致するお店のみを抽出
            // ホットペッパーAPIのクエリパラメータでジャンルコードを指定しても、
            // 正しくフィルタリングされないため、ここで改めてフィルタリングしている
            if (shopNames.includes(shop["name"])) {
              return false;
            }
            shopNames.push(shop["name"]);

            return includeGenreCodes.includes(shop["genre"]["code"])
          })

          return refilterdShop;
        }).catch((err) => {
          console.log(err)
        })
        return resShops;
      }

    return(
        <>
            <GeolocationModal
                show={showGeoModal}
                handleClose={() => setShowGeoModal(false)}
                handleGetGeolocation={getGeolocation}
            />
             <div>
            <h3>取得した位置情報</h3>
              <p>緯度: {geoLocation.lat}</p>
              <p>経度: {geoLocation.lng}</p>
            </div>
            <div
                style={{
                    textAlign : 'center',
                    backgroundColor : 'rgb(245,235,235)',
                    padding : '5%'
                }}
            >{!finish ? (
                <Questionnaire
                setFinish={setFinish}
                filterAttr={filterAttr}
                setFilterAttr={setFilterAttr}
                setFilteredShops={setFilteredShops}
                getShops={getShops}
                />
            ) : (
                <SuggestShops
            filteredShops={ filteredShops }
            setFilteredShops={ setFilteredShops }
            setFinish={setFinish} />
            )
            }</div>
        </>
    );

}

export default Body;
