
import { useState } from 'react';
import './App.css';


function App() {
  const[todo ,setTodo]=useState('');
  const[allTodo,setAllTodo]=useState([]);
  const [editId,setEditId]=useState(0);
  const handleSubmit=(e)=>{
e.preventDefault();

if (editId) {     // this constion update our edit todo 
  const editTodo = allTodo.find((item) => item.id === editId);
  const updatedTodos = allTodo.map((item) =>
    item.id === editTodo.id
      ? (item = { id: item.id, todo })
      : { id: item.id, todo: item.todo }
  );
  setAllTodo(updatedTodos);
  setEditId(0);
  setTodo("");
  return;
}

if(todo!==''){ //condtional statement
  setAllTodo([{ id: `${todo}-${Date.now()}`, todo }, ...allTodo]);
  setTodo('');
}
  }

  const handleDelete=(id)=>{
const deletetodo = allTodo.filter((item)=>item.id!==id);
setAllTodo([...deletetodo])

  }
  const handleEdit=(id)=>{   // this function only find our todo and return it in input box.
  const editTodo = allTodo.find((item)=>item.id===id); // it find the todo with id
  setTodo(editTodo.todo); // it return the todo in input box 
   setEditId(id)
  }
  return (
    <div className="App">
      <div className='container'>
        <h1>Todo List</h1>
        <form  onSubmit={handleSubmit}>
          <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)}/>
          <button>{editId?'Edit':'Add'}</button>
        </form>
        <ul className='list'>
       
        {
        allTodo.map((item) => (
        <li className="listItem">
          <span className="listtext" key={item.id}>
            {item.todo}
          </span>
          <button onClick={()=>handleEdit(item.id)}>Edit</button>
          <button onClick={()=>handleDelete(item.id)} >Delete</button>
        </li>
      ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
