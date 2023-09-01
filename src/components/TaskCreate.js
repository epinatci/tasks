import { useState } from "react";


function TaskCreate({ onCreate, task, taskformUpdate, onUpdate }) {

    const [title, setTitle] = useState(task ? task.title : '');
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

    console.log(title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (taskformUpdate) {
            onUpdate(task.id, title, taskDesc)
        }
        else {
            onCreate(title, taskDesc);
         }
             
        setTitle('');
        setTaskDesc('');
    };

    return (
        <>
            <div>

                {' '}

                {taskformUpdate ?

                    (<div className="task-update">
                        <h3>Please edit task!</h3>
                        <form className="task-form" >
                            <label className="task-label"> Edit Heading </label>
                            <input
                                value={title}
                                onChange={handleChange}
                                className="task-input"
                            />
                            <label className="task-label"> Edit Task </label>
                            <textarea
                                value={taskDesc}
                                onChange={handleTaskChange}
                                className="task-input"
                                rows={5}
                            />
                            <button
                                className="task-btn update-btn"
                                onClick={handleSubmit}>Recreate
                            </button>
                        </form>
                    </div>) : (<div className="task-create">
                        <h3>Please enter task</h3>
                        <form className="task-form" >
                            <label className="task-label"> Heading </label>
                            <input
                                value={title}
                                onChange={handleChange}
                                className="task-input"
                            />
                            <label className="task-label"> Task </label>
                            <textarea
                                value={taskDesc}
                                onChange={handleTaskChange}
                                className="task-input"
                                rows={5}
                            />
                            <button
                                className="task-btn"
                                onClick={handleSubmit}>Create
                            </button>
                        </form>
                    </div>)

                }
            </div>

        </>
    );
}

export default TaskCreate;