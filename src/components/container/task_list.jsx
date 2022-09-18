import React, { useState, useEffect } from 'react'
import { Task } from '../../models/task.class'
import {LEVELS} from '../../models/levels.enum'
import TaskComponent from '../pure/forms/task'



const TaskListComponent = () => {
  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)
  const[tasks, setTasks] = useState([defaultTask ])
  const changeCompleted= (id) => {
    console.log("Cambia estado de una tarea")
   
  }
  return (
    <div>
      <div>Your Tasks:</div>
      <TaskComponent task ={defaultTask}></TaskComponent>
    </div>
  )
}

export default TaskListComponent

