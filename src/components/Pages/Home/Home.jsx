import { Header } from "../../Layouts/Header/Header";
import { Main } from "../../Layouts/Main/Main";
import { useContext, useState } from "react";
import { ContainerTasks } from "../../Layouts/ContainerTasks/ContainerTasks";
import { ItemTasks } from "../../ItemTasks/ItemTasks";
import { taskContext } from "../../Context/Context";
import { NewTask } from "../../NewTask/NewTask";
import { InfoTasks } from "../../Layouts/InfoTasks/InfoTasks";
import { FilterTasks } from "../../FilterTasks/FilterTasks";


export const Home = () => {

const context = useContext(taskContext);
	return (
		<>
		<Header>
      <div><h1>Gestor de Traeas</h1></div>
			<NewTask/>
      <InfoTasks/>
		</Header>
    <FilterTasks/>
		<Main>
			<ContainerTasks>
				{
					context.filterTasks.map( task => <ItemTasks key={task.id} idTask={task.id} title={task.title} description={task.description}/>)
				}
			</ContainerTasks>
      
		</Main>
		</>
	);
};
