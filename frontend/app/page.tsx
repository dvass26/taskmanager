"use client";

import { useEffect, useState } from "react";
import { fetchTasks, addTask, deleteTask } from "./api_calls";
import "./Page.css";

interface Task {
  id: string;
  text: string;
}

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  async function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;

    const newTask = await addTask(input);
    setTasks([...tasks, newTask]);
    setInput("");
  }

  async function handleDelete(id: string) {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="task-container">
      <h1 className="task-title">Personal Task Manager</h1>

      <form onSubmit={handleAddTask} className="task-form">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a New Task"
          className="task-input"
        />
        <button type="submit" className="task-button">
          Add
        </button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span className="task-text">{task.text}</span>
            <button
              onClick={() => handleDelete(task.id)}
              className="delete-button"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
