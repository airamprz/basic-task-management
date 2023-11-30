"use client";
import React, { useState } from "react";
import TaskColumn from "../../components/TaskColumn";

const columns = ["TO DO", "IN PROGRESS", "IN REVIEW", "DONE"];

const initialTasks = [
  { id: 1, title: "Tarea 1", column: "TO DO" },
  { id: 2, title: "Tarea 2", column: "IN PROGRESS" },
  { id: 3, title: "Tarea 3", column: "IN REVIEW" },
  { id: 4, title: "Tarea 4", column: "DONE" },
];

export default function ProjectsPage() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleTaskMove = (taskId, targetColumn) => {
    const newTasks = tasks.map((task) => {
      if (task.id === Number(taskId)) {
        return { ...task, column: targetColumn };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const handleTaskUpdate = (task) => {
    const newTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      }
      return t;
    });
    setTasks(newTasks);
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="flex justify-center">
            {columns.map((column) => (
              <TaskColumn
                key={column}
                title={column}
                tasks={tasks.filter((task) => task.column === column)}
                onTaskMove={handleTaskMove}
                columnTitle={column}
                onTaskDelete={handleTaskDelete}
                onTaskAdd={() => {
                  const newTask = {
                    id: tasks.length + 1,
                    title: `Nueva Tarea ${tasks.length + 1}`,
                    column: column,
                  };
                  setTasks([...tasks, newTask]);
                }}
                onTaskUpdate={handleTaskUpdate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
