import React, { useState } from "react";
import './App.css';

function App(props) {


    const [tasks] = useState(props.tasks);

    return (
        <div className="col">
            <h1>pingo</h1>
            <p>luis pingo</p>
            {tasks.map(task => <div className="chain">{task.data + "\n" + task._id} <hr className="dashed"/> </div>)}

        </div>
    );

}

    export default App;
