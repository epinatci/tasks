import { useState } from "react"
import TaskCreate from "./TaskCreate"

function TaskShow({ task, onDelete, onUpdate }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(task.id);
    }


    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (id, updatedTitle, updatedTaskDesk) => {
        setShowEdit(false);
        onUpdate(id, updatedTitle, updatedTaskDesk);
    }
    
    return (
        <div className="task-show">

            {showEdit ? (
            
            <TaskCreate 
            task={task} 
            taskformUpdate={true} 
            onUpdate={handleSubmit}/>

            ) : (

                <div>

                    <h3 className="task-title">Heading</h3>
                    <p>{task.title}</p>

                    <h3 className="task-title">Task</h3>
                    <p>{task.taskDesc}</p>

                    <div className="buttons">

                        <button className="delete-btn" onClick={handleDeleteClick}>
                            <i className="fa-regular fa-trash-can"></i>
                            Delete</button>

                        <button className="update-btn" onClick={handleEditClick}>
                            <i className="fa-regular fa-pen-to-square"></i>
                            Update
                        </button>

                    </div>

                </div>
            )}

        </div>
    );
}

export default TaskShow;