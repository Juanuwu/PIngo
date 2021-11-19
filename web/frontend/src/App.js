import Form from "./form";
import Todo from "./todo";
import React, { useState } from "react";
import axios from "axios";





function App(props) {


    const [tasks, setTasks] = useState(props.tasks);


    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map(task => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
                // use object spread to make a new object
                // whose `completed` prop has been inverted
                axios
                    .patch(`/api/todos/${id}/`, {"completed": !task.completed})
                return {...task, completed: !task.completed}
            }
            return task;
        });

        setTasks(updatedTasks);
    }
    function editTask(id, newName) {
        const editedTaskList = tasks.map(task => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
                //
                return {...task, name: newName}
            }
            return task;
        });
        axios
        .patch(`/api/todos/${id}/`, {"name": newName})
        setTasks(editedTaskList);
    }


    function deleteTask(id) {
        const remainingTasks = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
        axios
            .delete(`/api/todos/${id}/`, {"id": id})
    }



    for (var key in tasks) {
        if (tasks.hasOwnProperty(key)) {
            console.log(key + " -> " + tasks[key]);
            <Todo
                id={tasks._id}
                name={tasks.data}
                key={tasks._id}
                toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
                editTask={editTask}

            />
            document.getElementsByClassName("tod0-label").innerHTML = "tasks._id"
        }


        function addTask(name) {
            const newTask = {id: Date.now(), name: name, completed: false};
            setTasks([...tasks, newTask]);
            axios
                .post("/api/todos/", {"id": newTask.id, "name": newTask.name, "completed": newTask.completed})


        }
    }

    return (

        <div className="todoapp stack-large">
            <label className="tod0-label" htmlFor={props.id}>
                {props.name}
            </label>


            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
            >

            </ul>
        </div>
    );
}
    export default App;
