import React, { useState, useEffect } from 'react';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';

const TodoList = ({ tasks, setTasks, undoneTasksCount, setUndoneTasksCount, showOnlyUndone, setShowOnlyUndone }) => {
  const toggleTaskDone = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  const filteredTasks = showOnlyUndone ? tasks.filter((task) => !task.done) : tasks;

  useEffect(() => {
    // Tải tasks từ LocalStorage
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      setTasks(parsedTasks);
      const updatedUndoneTasksCount = parsedTasks.filter((task) => !task.done).length;
      setUndoneTasksCount(updatedUndoneTasksCount);
    }
  }, [setTasks, setUndoneTasksCount]);

  useEffect(() => {
    // Lưu trữ tasks vào LocalStorage khi có sự thay đổi
    localStorage.setItem('tasks', JSON.stringify(tasks));
    const updatedUndoneTasksCount = tasks.filter((task) => !task.done).length;
    setUndoneTasksCount(updatedUndoneTasksCount);
  }, [tasks, setUndoneTasksCount]);

  return (
    <div className="todo-list-container">
      <div>
        <input
          type="checkbox"
          checked={showOnlyUndone}
          onChange={() => setShowOnlyUndone(!showOnlyUndone)}
          className="item-done-button"
          color="#9a9a9a"
        />
unfinished
      </div>

      {filteredTasks.map((task) => (
        <div
          key={task.id}
          className={`todo-item-container ${task.done ? 'done' : ''}`}
        >
          {task.done ? (
            <FaRegCheckCircle
              className="item-done-button"
              color="#9a9a9a"
              onClick={() => toggleTaskDone(task.id)}
            />
          ) : (
            <FaRegCircle
              className="item-done-button"
              color="#9a9a9a"
              onClick={() => toggleTaskDone(task.id)}
            />
          )}
          <div className="item-title">{task.text}</div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;