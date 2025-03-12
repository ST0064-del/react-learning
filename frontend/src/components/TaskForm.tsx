import React, { useEffect } from "react";
import { Form, Input, Select, Button, message } from "antd";
import { Task, addTasks, updateTasks } from "../services/taskServices";

const { Option } = Select;

interface TaskFormProps {
  editingTask: Task | null;
  onTaskSaved: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ editingTask, onTaskSaved }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (editingTask) {
      form.setFieldsValue({
        name: editingTask.name,
        priority: editingTask.priority,
        deadline: editingTask.Deadline.split("T")[0],
      });
    }
  }, [editingTask, form]);

  const onFinish = async (values: Omit<Task, "id">) => {
    const success = editingTask
      ? await updateTasks({ ...editingTask, ...values })
      : await addTasks({ id: Date.now(), ...values });

    if (success) {
      message.success(editingTask ? "Tâche mise à jour !" : "Tâche ajoutée !");
      form.resetFields();
      onTaskSaved();
    } else {
      message.error("Erreur lors de l'enregistrement");
    }
  };

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Form.Item
        label="Nom de la tâche"
        name="name"
        rules={[{ required: true }]}
      >
        <Input placeholder="Nom de la tâche" />
      </Form.Item>
      <Form.Item label="Priorité" name="priority" rules={[{ required: true }]}>
        <Select>
          {[1, 2, 3, 4, 5].map((p) => (
            <Option key={p} value={p}>
              {p}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Date limite"
        name="deadline"
        rules={[{ required: true }]}
      >
        <Input type="date" />
      </Form.Item>
      <Button type="primary" htmlType="submit" className="w-full">
        {editingTask ? "Mettre à jour" : "Ajouter une tâche"}
      </Button>
    </Form>
  );
};

export default TaskForm;
