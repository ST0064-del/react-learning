import React, { useEffect, useState } from "react";
import { Card } from "antd";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task, fetchTasks, deleteTask } from "./services/taskServices";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(false);

  const loadTasks = async () => {
    setLoading(true);
    const data = await fetchTasks();
    setTasks(data);
    setLoading(false);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDelete = async (id: number) => {
    if (await deleteTask(id)) {
      loadTasks();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Gestionnaire de Tâches
      </h1>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        <Card className="w-full md:w-1/2 shadow-lg">
          <TaskForm editingTask={editingTask} onTaskSaved={loadTasks} />
        </Card>
        <div className="w-full md:w-1/2">
          {loading ? (
            <p>Chargement...</p>
          ) : (
            <TaskList
              tasks={tasks}
              onEdit={setEditingTask}
              onDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
