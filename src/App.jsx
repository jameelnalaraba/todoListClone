import { useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import './App.css';
import ReactDOM from 'react-dom';
import Header from './Header'; // Import the Header component

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <Header /> {/* Include the Header component */}
      <h1>Add Your Tasks</h1>
      <AddTaskForm onAdd={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App;

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
    )
