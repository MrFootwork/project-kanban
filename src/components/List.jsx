import ListItem from './ListItem';
import '../styles/List.css';

const List = ({ list, onDelete }) => {
	console.log('list', list);

  const listItems = []

  list.forEach(task => listItems.push(<p>{task.title}</p>))

	return (
		<ul id='list'>
			{/* {list.map(task => <p>{task.title}</p>)} */}

			{/* {list.map(task => {
        return <ListItem key={task.id} task={task} onDelete={onDelete}/>
      })} */}

      {listItems}
		</ul>
	);
};

export default List;
