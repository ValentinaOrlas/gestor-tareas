import { useContext, useEffect } from "react";
import { taskContext } from "../../Context/Context";
import './InfoTaks.css';

export const InfoTasks = () => {

  const context = useContext(taskContext);

  useEffect(()=>{

    let pending = context.tasks.filter(task => task.status === false);
    let resolve = context.tasks.filter(task => task.status === true);

    context.setPendingTasks(pending.length);
    context.setDoneTasks(resolve.length);

  },[context.tasks])
  return (
    <h2>Tiene <span>{context.pendingTasks}</span> pendientes y <span>{context.doneTasks}</span> terminadas</h2>
  )
}
