import React from 'react';
import {BroswerRouter as Router, Routes, Navigate} from "react-router-dom"
import Data from "./lunch.json";
import SuggestShops from './SuggestShops';
import FilterShops from './FilterShops';
import Question from './Questionnaire';

function Body(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Question />}/>
                <Route path="/suggestshops" element={<SuggestShops />}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </Router>
    )
}

export default Body;