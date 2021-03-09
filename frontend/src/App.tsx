import React, {useState, useEffect} from "react"
import "./app.scss"
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./store"
import Posts from "./components/Posts/Posts";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
               <Header />
               <Posts/>
            </div>
        </Provider>
    )
}

export default App
