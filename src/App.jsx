import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'
import "./css/App.css";
import Tasks from "./components/tasks";
import AddTask from "./components/AddTask";

const App = () => {
// const message = 'Hello World';
  const [tasks, setTasks] = useState([{
        id: '1',
        title: 'Estudei programação',
        completed: false,
        },

        {
        id: '2',
        title: 'Ler 2 livros',
        completed: true,
        },
      ]);

      const handleTaskAddition = (taskTitle) => {
        const newTasks = [
          ...tasks,
          {
              title: taskTitle,
              id: uuidv4(),
              completed: false,
          },
        ];

        setTasks(newTasks);
      };

  return (
    
    <>
     <div className="container">
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks tasks={tasks}/>
     </div>
     
    </>
    
  )
 }

 export default App;