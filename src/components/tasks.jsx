import React from 'react';
import AddTask from './AddTask';

import Task from "./task";

const Tasks = ({tasks}) => { 
    return (
        <>
            <AddTask />
            {tasks.map((task) => (
            <Task task={task}/>
            ))}
       
        </>
        )
}

export default Tasks;
