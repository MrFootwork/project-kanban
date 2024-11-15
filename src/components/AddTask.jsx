import React, { useState } from 'react'

function AddTask({handleAddTask}) {
    const [task, setTask] = useState({
        title : "",
        description : "",
        assignee : "",
        status: "To Do",
        priority: "High",
        createdDate: "2023-01-01",
        dueDate: "2023-01-01"
      });


      const handleTask = (e) => {
        const value = e.target.value;
        setTask({ ...task, [e.target.name]: value })
      };

  
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newtask = {
        title : task.title,
        description : task.description,
        assignee : task.assignee,
        status: task.status,
        priority: task.priority,
        createdDate: task.createdDate,
        dueDate: task.dueDate
      }
      
      
      // this prop shoud add in Dashboard
      handleAddTask(newtask);
      
      setTask({
        title : "",
        description : "",
        assignee : "",
        status: "To Do",
        priority: "High",
        createdDate: "2023-01-01",
        dueDate: "2023-01-01"
      });
    }
  
  
  
    return (
      <form onSubmit={handleSubmit}>
          <span>Add a Task</span>
          
            <label>
              Title 
              <input name="title" type="text" placeholrde="Title" value={task.title} onChange={handleTask}  />
            </label>
  
            <label>
              Description
              <input name="description" type="text" placeholder="Description" value={task.description} onChange={handleTask}/>
            </label>
  
            <label>
              Assignee
              <input name="assignee" type="text" placeholder="Assignee" value={task.assignee} onChange={handleTask}/>
            </label>
  
            <label>
              Status
              <select name="status"  placeholder="Status" value={task.status} onChange={handleTask}>
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </label>
          
  
          
            <label>
              Priority
              <select name="priority" value={task.priority} onChange={handleTask}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </label>
  
            <label>
              Created Date
              <input
                name="createdDate"
                type="date"
                placeholder="Created Date"
                min={"2023-01-01"}
                max={"2029-01-01"}
                value={task.createdDate}
                onChange={handleTask}
              />
            </label>
  
            <label>
              DueDate
              <input 
                name="dueDate" 
                type="date" 
                placeholder="Created Date"
                min={"2023-01-01"}
                max={"2029-01-01"}
                value={task.dueDate} 
                onChange={handleTask}/>
            </label>
  
            <button type="submit">Add Student</button>
          
  
        </form>
    );
}

export default AddTask;