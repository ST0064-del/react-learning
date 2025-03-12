import React from "react";
import TaskCard from "./TaskCard";
import { Task } from "../api/taskServices";
import { Button } from "antd";

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
      <Button>Afficher par priorité</Button>
    </div>
  );
};

export default TaskList;
