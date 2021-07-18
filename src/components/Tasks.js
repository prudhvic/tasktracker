import React from 'react'

const Tasks = ({tasks,onDelete}) => {
    return (
        <div className="tasks">
            {
                tasks.map((task) => (
                    <div className='task' key={task.id}>
                        <div className="task-content">
                        <h2>{task.text}</h2>
                        <p>{task.day}</p>
                        </div>
                        <button onClick={()=>onDelete(task.id)}>delete</button>
                        
                </div>
            ))}
        </div>
    )
}

export default Tasks
