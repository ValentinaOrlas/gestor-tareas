import { useContext } from "react";
import { taskContext } from "../Context/Context";
import "./ItemTasks.css"; 
import { DeleteTask } from "../DeleteTask/DeleteTask";

export const ItemTasks = ({ idTask, title, description }) => {
  const { tasks, updateTaskStatus } = useContext(taskContext);

  const task = tasks.find((task) => task.id === idTask);

  const handleCheckboxChange = () => {
    updateTaskStatus(idTask, !task.status);
  };

  return (
    <li id={idTask} className={`task-item ${task.status ? 'completed' : 'pending'}`}>
      <div className="status-circle"></div>
      <h2>{title}</h2>
      <p>{description}</p>

      <input
        type="checkbox"
        checked={task.status}
        onChange={handleCheckboxChange}
      />
      <DeleteTask taskId={idTask} />
    </li>
  );
};

