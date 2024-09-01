import { createContext, useState } from "react"

export const taskContext = createContext();


export const TasksProvider = ({ children }) => {
  const tsks = [];

  const [tasks, setTasks] = useState(tsks);
  const [filterTasks, setFilterTasks] = useState(tsks);
  const [pendingTasks, setPendingTasks] = useState(0);
  const [doneTasks, setDoneTasks] = useState(0);

  // Función para actualizar el estado de la tarea
  const updateTaskStatus = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <taskContext.Provider
      value={{ tasks, setTasks, filterTasks, setFilterTasks, updateTaskStatus, pendingTasks, setPendingTasks, doneTasks, setDoneTasks }}
    >
      {children}
    </taskContext.Provider>
  );
};


