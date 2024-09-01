import { useContext, useState, useRef } from "react";
import { taskContext } from '../Context/Context';
import { v4 as uuidv4 } from 'uuid';
import './NewTask.css'

export const NewTask = () => {

  const context = useContext(taskContext);

  const [titleTask, setTitleTask] = useState('');
  const [descriptionTask, setDescriptionTask] = useState('');

  const txtTitle = useRef('');
  const txtDescription = useRef('');

  const handleTitleTask = (event)=> setTitleTask(event.target.value);
  const handleDescriptionTask = (event)=> setDescriptionTask(event.target.value);

  const handleCreateTask = event =>{
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      title: titleTask,
      description : descriptionTask,
      status : false
    }
    
    context.setTasks([ ...context.tasks, newTask]);
    context.setFilterTasks([...context.tasks, newTask]);

    txtTitle.current.value = '';
    txtDescription.current.value = '';
  }
  return (
    <form >
      <fieldset>
        <label>Nombre de la tarea</label>
        <input ref={txtTitle} onChange={handleTitleTask} id='txt-title' placeholder="Ingresar tarea" type='text'/>
      </fieldset>
      <fieldset>
      <label>Descripción de la tarea</label>
      <input ref={txtDescription} onChange={handleDescriptionTask} id='txt-title' placeholder="Ingresar descripción" type='text'/>
      </fieldset>
      <button onClick={handleCreateTask}>Agregar nueva tarea</button>
    </form>
  )
}
