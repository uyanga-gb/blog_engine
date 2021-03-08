import React, {useState, useEffect} from "react"
import "./app.scss"
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./store"
import Posts from "./components/Posts/Posts";

function App() {
    const [user, setUser] = useState()

    function getUsers() {
        fetch('http://localhost:3001')
            .then(response => {
                return response.text();
            })
            .then(data => {
                console.log('I am getting data from my local server', data)
                setUser(data);
            });
    }

    useEffect(() => {
        // getUsers();
    }, []);

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
