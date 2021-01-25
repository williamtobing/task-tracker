import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Mantap",
      day: "Senen 8 Mhater",
      reminder: true,
    },
    {
      id: 2,
      text: "Banget",
      day: "Jumahat 10 AgusHarimurti",
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
