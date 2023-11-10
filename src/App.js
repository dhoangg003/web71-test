import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import React, { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [undoneTasksCount, setUndoneTasksCount] = useState(0);
  const [showOnlyUndone, setShowOnlyUndone] = useState(false);
  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      done: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setUndoneTasksCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <div className="container">
        <TodoListHeader undoneTasksCount={undoneTasksCount} />
        <TodoList
          tasks={tasks}
          setTasks={setTasks}
          undoneTasksCount={undoneTasksCount}
          setUndoneTasksCount={setUndoneTasksCount}
          showOnlyUndone={showOnlyUndone}
  setShowOnlyUndone={setShowOnlyUndone}
        />
        <Form addTask={addTask} />
      </div>
      <Footer />
    </div>
  );
};
 