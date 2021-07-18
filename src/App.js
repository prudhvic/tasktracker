import "./App.css";
import Tasks from "./components/Tasks";
import Form from "./components/Form";
import Header from "./components/Header";
import { useState, useEffect } from "react";
function App() {
  let todos = [
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
  ];

  let [tasks, setTasks] = useState(todos);
  let [isopen, setIsopen] = useState(false);
  function deletetask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function savetodos(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  useEffect(() => {
    savetodos(tasks);
  }, [tasks,isopen]);
  useEffect(() => {
    getlocaltodos();
  }, []);
  const getlocaltodos = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("tasks"));
      setTasks(todoLocal);

    }
  };
  function addtask(newtask) {
    let id = Math.floor(Math.random() * 1000 + 1);
    let tasker = { id, ...newtask };

    setTasks([...tasks, tasker]);
    savetodos([...tasks, tasker]);
    getlocaltodos()
  }
  function opentask() {
    setIsopen(!isopen);
  }

  return (
    <div className="App">
      <Header isopen={isopen} opentask={opentask} />
      {isopen && <Form addtask={addtask} />}
      <Tasks tasks={tasks} onDelete={deletetask} />
    </div>
  );
}

export default App;
