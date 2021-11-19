import React, { useState } from "react";
import axios from "axios";

function App(props) {


    const [tasks] = useState(props.tasks);

    return (
        <div className="col">
            <h1>pingo</h1>
            <p>luis pingo</p>
            {tasks.map(task => <div>{task.data + "\n" + task._id}</div>)}
        </div>
    );

}


    export default App;
