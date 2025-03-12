export interface Task {
  id: number;
  name: string;
  priority: number;
  Deadline: string;
}

const API_URL_NODEJS = "http://localhost:5000/api/";

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await fetch(`${API_URL_NODEJS}/tasks`);
    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erreur lors du chargement des tâches : " + error.message);
      return [];
    } else {
      console.error("Erreur lors du chargement des tâches : " + String(error));
      return [];
    }
  }
};

export const addTasks = async (tasks: Task) => {
  const response = await fetch(`${API_URL_NODEJS}/addTasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tasks),
  });

  return response.ok;
};

export const updateTasks = async (task: Task) => {
  const response = await fetch(`${API_URL_NODEJS}/updateTasks`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  return response.ok;
};

export const deleteTask = async (id: number) => {
  const response = await fetch(`${API_URL_NODEJS}/deleteTasks/${id}`, {
    method: "DELETE",
  });
  return response.ok;
};
