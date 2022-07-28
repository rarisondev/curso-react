import React from 'react';
import AddTask from './AddTask';

import Task from "./task";

const Tasks = ({tasks, handleTaskClick, handleTaskDeletion}) => { 
    return (
        <>
            <AddTask />
            {tasks.map((task) => (
            <Task
                  task={task}
                  key={task.id}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}/>
            ))}
       
        </>
        )
}

export default Tasks;
