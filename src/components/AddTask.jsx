import React from 'react';
import Button from "./Button"
import "./AddTask.css"

const AddTask = () => {
    return (
        <div className={"add-task-container"}>
            <input className={"add-task-input"} type="text"/>
            <div className="add-task-button-container">
                <button className={"button"}>Adicionar</button>
            </div>
        </div>
    );
};

export default AddTask;
