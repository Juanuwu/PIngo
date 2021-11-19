import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from "axios";


function getRQ() {
    axios.get('/api/todos').then(function (result) {

        doSomething(result.data);
        console.log(result.data)
    });
}

function doSomething (data) {
    ReactDOM.render(<App tasks={data} />, document.getElementById("root"));
}

getRQ()




