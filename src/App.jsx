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

    return (
        <>
            <div className="container">
                <AddTaskContainer />
                <Tasks tasks={tasks}/>
            </div>
        </>
    );
};

export default App;