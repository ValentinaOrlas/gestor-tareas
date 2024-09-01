import { useContext } from "react";
import { taskContext } from '../Context/Context';

export const DeleteTask = ({ taskId }) => { 

  const context = useContext(taskContext);

  const handleDeleteTask = () => {
    const updatedTasks = context.tasks.filter(task => task.id !== taskId);
    context.setTasks(updatedTasks);
    context.setFilterTasks(updatedTasks);
  };

  return (
    <div className="delete-task-container">
      <button className="delete-button" onClick={handleDeleteTask}>
        Eliminar
      </button>
    </div>
  );
};

