import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from "axios";

function getRQ() {
    axios.get('/api/todos').then(function (result) {

        doSomething(result.data);

    });
}
function postRQ(valor) {
    axios.post('/api/todos', {

    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    }



function doSomething (data) {
    ReactDOM.render(<App tasks={data} />, document.getElementById("root"));
}

getRQ()




