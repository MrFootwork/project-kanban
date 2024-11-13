import './styles/reset.css';
import './App.css';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import List from './components/List';

import tasks from './data/tasks.json'

import { useState } from 'react';

function App() {
  const [list, setList] = useState(tasks)
  
  const deleteItem = (id) => {
    setList(list.filter(item => {
      return item.id !== id
    }))
  }

  return (
    <>
      <Navbar />
      <Sidebar />

      <div id="listContainer">
        <List list={list} onDelete={deleteItem}/>
        <List />
      </div>

      <Footer />
    </>
  );
}

export default App;
