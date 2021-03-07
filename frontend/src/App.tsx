import React, {useState, useEffect} from "react"
import "./app.scss"
import Header from "./components/Header/Header";

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
        getUsers();
    }, []);
    return (
        <div className="App">
           <Header />
        </div>
    )
}

export default App
