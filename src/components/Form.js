import React, { useState } from "react";

const Form = ({ addtask }) => {
  let [text, setText] = useState("");
  let [day, setDay] = useState("");
  let [reminder, setReminder] = useState(false);
    function submitTask(e) {
      e.preventDefault()
    if (!text) {
      alert("please add task");
    }
    
      addtask({ text, day, reminder });
      setText('');
      setDay("");
      setReminder(false)
  }
  return (
    <div>
      <form className="grid" onSubmit={submitTask}>
        <div className="form-input">
          <p>Add task</p>
          <input
            type="text"
            placeholder="Add task"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>

        <div className="form-input">
          <p>set day&&time</p>
          <input
            type="text"
            placeholder="choose date"
            value={day}
            onChange={(event) => setDay(event.target.value)}
          />
        </div>

        <div className="form-rem">
          <p>reminder</p>

          <input
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(event) => setReminder(event.currentTarget.checked)}
          />
        </div>
        <button type="submit ">submit</button>
      </form>
    </div>
  );
};

export default Form;
