import { useEffect, useState } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import axios from 'axios';



function App() {


  const [tasks, setTasks] = useState([]);

  const createTask = async (title, taskDesc) => {

    const response = await axios
      .post('http://localhost:3000/tasks', {
        title,
        taskDesc
      });
    console.log(response);

    const createdTasks = [
      ...tasks,
      response.data
    ]
    setTasks(createdTasks);
  };

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(afterDeletingTasks);
  };

  const fetchTasks = async () => {
    const response= await axios.get('http://localhost:3000/tasks');
    setTasks(response.data);
  };

  useEffect=(()=>{
    fetchTasks();
  },[]);

  const editTaskById = async(id, updatedTitle, updatedTaskDesk) => {
    await axios.put(`http://localhost:3000/tasks/${id}`);
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesk }
      }
      return task;
    });
    setTasks(updatedTasks);

  };

  return (
    <div className="App">

      <TaskCreate
        onCreate={createTask}
      />

      <h1> Tasks </h1>

      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />

    </div>
  );
}

export default App;
