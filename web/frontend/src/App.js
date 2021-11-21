import React from "react";
import './index';
const MyApp = {};

function App(props) {
    MyApp.data = props.tasks
    var numero = 0
    numero = numero + 1

    return (

        <div className="col">
            {MyApp.data.map(task =>
            <div class="chain">{"Nombre:\n" + task.data + "\n" + "Hash:" + task._id + "\n"+ "Prev:" + task.prev + "\n"+" Tipo: " + numero}  <hr className="dashed"/> </div>)
            }
        </div>
    );

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
                    <span class= "search-item">${"Nombre: " + task.data + "\n" + " Hash: " + task._id}</span>
                </div>
                `;
            }
        });
    }

}

selectElement('.searchbar').addEventListener('keyup', getResults);

    export default App;
