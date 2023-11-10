import React from 'react';
const TodoListHeader = ({ undoneTasksCount }) => {
    return <div className="header">You have {undoneTasksCount.toString()} tasks left!</div>;
  };
  
  export default TodoListHeader;
  