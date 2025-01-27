import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask === '') return;
        setTasks([...tasks, newTask]);
        setNewTask('');
    };

    return (
        <div id="app">
            <h1>To-Do List</h1>
            <input 
                type="text" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
                placeholder="Add a new task" 
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));