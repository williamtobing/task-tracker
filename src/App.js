import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Memancing Ikan di Dapur",
      day: "Senen, 8 Mharet 2000",
      reminder: true,
    },
    {
      id: 2,
      text: "Memakan Sate Abang Adek",
      day: "Jumahat, 10 AgusHarimurti 2077",
      reminder: true,
    },
    {
      id: 3,
      text: "Mencagkul Tobat di Kampung",
      day: "Rebo, 13 Martumpol 1945",
      reminder: false,
    },
    {
      id: 4,
      text: "Mencuri Ikan tapi Bayar",
      day: "Marminggu, 30 Februari 2020",
      reminder: false,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to Show"
      )}
    </div>
  );
}

export default App;
