import React from "react";
import './index';
import './style.css';
import axios from "axios";
import Draggable from "react-draggable";
const MyApp = {};
var film;



function App(props) {
    MyApp.data = props.tasks
    const lastIndex = MyApp.data.length - 10;
    return (
    [
        <div className="col">

            {film = MyApp.data.slice(-10).reverse().map((task) =>

            <div class="chain">{task.data + "\n" + "Hash:"  + task._id }  <hr className="dashed"/> </div>)
            }
        </div>,
        <Draggable>
            <div className="form-popup" id="myForm">

            <form onSubmit={handleSubmit} action="/action_page.php" className="form-container">
                <h1>registra tu enefete de pingo de luis de pingo</h1>

                <label form="email"><b>Nombre</b></label>
                <input type="text" placeholder="Tu nombre de pingo" name="email" id="username" required/>


                    <button type="submit" className="btn">Adquirir tu propio pingo</button>
                    <button type="button" className="btn cancel" onClick={() => {
                        document.getElementById("myForm").style.display = "none";
                    }}>Cerrar</button>
            </form>

            </div>
        </Draggable>
        ]
    );

}

function handleSubmit(event) {
    event.preventDefault();
    console.log(document.getElementById("username").value);
    postRQ(document.getElementById("username").value);
}


function selectElement(selector){
    return document.querySelector(selector);
}
//Limpiar el contenido
function clearResult(){
    selectElement('.search-results').innerHTML="";
}

function getResults(){
    const search = selectElement('.searchbar').value;
    clearResult();
    if(search.length > 0){

        MyApp.data.map(task =>{
        if (
            task.data.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            task.data.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            ){
                selectElement('.search-results').innerHTML+=`
                <div class = "search-results-item">
                    <span class= "search-item">${"Nombre: " + task.data + "\n" + " Hash: " + task._id + "\n" + "Prev: " + task.prev}</span>
                </div>
                `;
            }
        });
    }

}
function postRQ(valor) {
    axios.post('/users/', {
    valor
    })
        .then(function (response) {

            console.log(response.data);
            document.getElementById("luis pingo").src="http://127.0.0.1:5000/static/" + response.data +".png";
            document.getElementById("luis pingo").style.visibility = "visible";




        })
        .catch(function (error) {
            console.log(error);
        });

}

function logSubmit(event) {
    event.preventDefault();
    console.log(document.getElementById("username").value);
    postRQ(document.getElementById("username").value);



}






document.addEventListener('submit', logSubmit);
selectElement('.searchbar').addEventListener('keyup', getResults);

    export default App;
