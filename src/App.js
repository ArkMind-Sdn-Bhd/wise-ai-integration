import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import axios from "axios";

function App() {

    useEffect(() => {
        axios.post('https://wiseconsole-demo.wiseai.tech/sdk/token', {}, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3aXNlYWkiLCJzdWIiOiJ3aXNlYWktYXBpIiwiaWQiOiIxNDkiLCJubSI6IldlYiBUZXN0aW5nIiwibWlzYyI6IiIsInZlciI6M30.QVJ-KsQ1G_G9Y2wXYaWPolhmJWJLni4GeQUjay8BIEw`
            }
        })
            .then((res) => {
                localStorage.setItem('tokenKey', res.data.data.token);
            })
    }, [])

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
