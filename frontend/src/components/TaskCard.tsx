import React from "react";
import { Card, Button } from "antd";
import { Task } from "../services/taskServices";

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("fr-FR");
};

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete }) => {
  return (
    <Card key={task.id} style={{ marginBottom: "1rem" }}>
      <p className="text-lg font-semibold">{task.name}</p>
      <p>Priorité : {task.priority}</p>
      <p>Deadline : {formatDate(task.Deadline)}</p>
      <div className="flex gap-2 mt-2">
        <Button type="default" onClick={() => onEdit(task)}>
          Modifier
        </Button>
        <Button type="primary" danger onClick={() => onDelete(task.id)}>
          Supprimer
        </Button>
      </div>
    </Card>
  );
};

export default TaskCard;
