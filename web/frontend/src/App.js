import React, { useState } from "react";
import './index';

function App(props) {


    const [tasks] = useState(props.tasks);
    var numero = 0
    numero = numero + 1
    return (
        <div className="col"> 
            {
            tasks.map(task => 
                
            <div class="chain">{"Nombre:\n" + task.data + "\n" + "Hash:" + task._id + "\n"+ "Prev:" + task.prev + "\n"+" Tipo: " + numero}  <hr className="dashed"/> </div>)
            }
        </div>
    );

}
    export default App;
