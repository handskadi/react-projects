import React, {useState} from "react";

function ToDoList() {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    // Handlers:
    const handleInputChange = (e) => {
        setNewTask(e.target.value)
        
    }

    // Funcs
    const addTask = () => {
        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_,i) => i !== index)
        setTasks(updatedTasks)

    }
    const moveTaskUp = (index) => {
        if (index > 0 && index < tasks.length) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index - 1];
            updatedTasks[index - 1] = updatedTasks[index];
            updatedTasks[index] = temp;
            setTasks(updatedTasks);
        }
    };
    const moveTaskDown = (index) => {
        if (index < tasks.length - 1 && index >= 0) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index + 1];
            updatedTasks[index + 1] = updatedTasks[index];
            updatedTasks[index] = temp;
            setTasks(updatedTasks);
        }
    }

    return(
    <div className="to-do-list">
        <h1>To-Do-List</h1>

        <div>
            <input 
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}/>
                <button
                    className="add-button"
                    onClick={addTask}>
                    Add
                </button>
        </div>
        <ul>
            {tasks.map( (task, index) =>
            <li key={index}>
                <p className="text">{task}</p>
                <button className="delete-button" onClick={() =>deleteTask(index)}>Delete</button>
                <button className="move-button" onClick={() =>moveTaskUp(index)}> &#8743;</button>
                <button className="move-button" onClick={() =>moveTaskDown(index)}> &#8744;</button>
            </li>)}
        </ul>
    </div>
    );
}
export default ToDoList