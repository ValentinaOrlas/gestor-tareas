import { useContext } from "react";
import { taskContext } from '../Context/Context';
import './Filter.css';

export const FilterTasks = () => {

  const context = useContext(taskContext);

  const handleFilter = event =>{
    let currentOption = event.target.value;

    if(currentOption === 'Pendientes'){
      context.setFilterTasks(context.tasks.filter(tk=> !tk.status))
    }else if(currentOption === 'Terminadas'){
      context.setFilterTasks(context.tasks.filter(tk=> tk.status))
    }else{
      context.setFilterTasks(context.tasks)
    }
  }
  return (
    <div>
      <label>Filtrar por</label>
      <select onChange={handleFilter}>
      <option value='Todas'>Todas</option>
      <option value='Pendientes'>Pendientes</option>
      <option value='Terminadas'>Terminadas</option>
      </select>
    </div>
  )
}
