import React, {useState} from 'react'
import Button from "./Button"
import "./AddTask.css"

const AddTask = () => {
    const [inputData, setInputData] = useState('');

    const handleInputChage = (e) => {
        setInputData(e.target.value);
    }

    return (
        <div className={"add-task-container"}>
            <input value={inputData} onChange={handleInputChage} className={"add-task-input"} type="text"/>
            <div className="add-task-button-container">
                <button className={"button"}>Adicionar</button>
            </div>
        </div>
    );
};

export default AddTask;
