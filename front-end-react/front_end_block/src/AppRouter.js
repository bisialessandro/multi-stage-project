import React from "react";
import FirstScene from "./Scene/FirstScene/FirstScene";
import SecondScene from "./Scene/SecondScene/SecondScene";
import {Route, } from 'react-router-dom';

export const AppRouter = () => {
        return   <div>
            <Route exact path="/" component={FirstScene}/>
            <Route path="/second" component={SecondScene}/>
        </div>
    ;
}