import '../styles/ListItem.css'

const ListItem = ({task, onDelete}) => {
  return (
    <li className='list-item'>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>{task.assignee}</p>
      <p>{task.status}</p>
      <p>{task.priority}</p>
      <p>{task.createdDate}</p>
      <p>{task.dueDate}</p>
      <button onClick={()=>onDelete(task.id)}>Delete</button>
    </li>
  )
}

export default ListItem