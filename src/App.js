import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import axios from "axios";

function App() {

    useEffect(() => {

        if (localStorage.getItem("result")) {
            alert(localStorage.getItem("result"));

            axios.post("https://ekyc-redcash.hardcore-carver.42-1-60-64.plesk.page/redCash/api/v1.0/wiseai/result", JSON.parse(localStorage.getItem("result")))
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    alert(err);
                })

        }

        axios.post('https://ekyc-redcash.hardcore-carver.42-1-60-64.plesk.page/redCash/api/v1.0/wiseai/token', {}, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3aXNlYWkiLCJzdWIiOiJ3aXNlYWktYXBpIiwiaWQiOiIxNDkiLCJubSI6IldlYiBUZXN0aW5nIiwibWlzYyI6IiIsInZlciI6M30.QVJ-KsQ1G_G9Y2wXYaWPolhmJWJLni4GeQUjay8BIEw`
            }
        })
            .then((res) => {
                localStorage.setItem('key', res.data.data.token);
                localStorage.setItem('iv', res.data.data.encryption.iv);
            })
    }, [localStorage])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
