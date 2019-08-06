import React from "react";
import {AppRouter} from "./AppRouter";
import {NavBar} from "./Component/NavBar/NavBar";

class App extends React.Component{

    render(){

        return   <div>
            <NavBar/>
            <AppRouter/>
        </div>
    }
}

export default App;