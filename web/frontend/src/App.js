import React, { useState } from "react";
import './App.css';

function App(props) {


    const [tasks] = useState(props.tasks);

    return (
        <div className="col">
            <h1>pingo</h1>
            <p>luis pingo</p>
            {tasks.map(task => <div className="chain">{"Nombre:" + task.data + "\n" + "Hash:" + task._id + "\n"+ "Prev:" + task.prev} <hr className="dashed"/> </div>)}


        </div>
    );

}

    export default App;
