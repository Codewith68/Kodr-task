import TaskItem from "./TaskItem";
import React from "react";

function TaskList({ tasks, deleteTask, toggleComplete, toggleRunning, updateTime }) {
  if (!tasks.length)
    return <p className="text-center text-gray-500 mt-4">No tasks yet...</p>;

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          toggleRunning={toggleRunning}
          updateTime={updateTime}
        />
      ))}
    </div>
  );
}

export default React.memo(TaskList);
