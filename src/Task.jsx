//import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <span>{task}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
