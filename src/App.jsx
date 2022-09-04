import React, {useState} from 'react'
import "./App.css";
import Tasks from "./components/Tasks"
import AddTaskContainer from "./components/AddTask";

const App = () => {
    //let message = 'Hello, World!'
    const [tasks, setTasks] = useState([
        {
            id: "1",
            title: "Estudar programação",
            completed: false,
        },
        {
            id: "2",
            title: "Ler livros",
            completed: true,
        },
    ]);

    const handleTaskAddition = (taskTitle) => {
        const newTask = [...tasks, {
            title: taskTitle,
            id: Math.random(10);
            completed: false,
        }]
    }

    return (
        <>
            <div className="container">
                <AddTask />
                <Tasks tasks={tasks}/>
            </div>
        </>
    );
};

export default App;