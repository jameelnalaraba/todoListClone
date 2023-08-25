import { useState } from 'react';
import PropTypes from 'prop-types';

const AddTaskForm = ({ onAdd }) => {
  const [newTask, setNewTask] = useState('');

  const handleAdd = () => {
    if (newTask.trim() !== '') {
      onAdd(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="add-task-form">
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

AddTaskForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddTaskForm;
