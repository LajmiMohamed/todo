import React,{useState} from 'react';
import './App.css';
import {v4 as uuidv4} from "uuid";
function App() {
  const [selectedTodo,setSelectedTodo]=useState({})
  const [editMode,seteditMode]=useState(false)
  const [newTodo,setnewTodo]=useState('')
  const [todos,setTodos]=useState([

  ])
  const add =()=>{
     setTodos(todos.concat({id:uuidv4(),text:newTodo})) 
     setnewTodo("")
  }
  const deleteTodo=(id)=>{
    setTodos(todos.filter(x=>x.id !== id))
  }
  const edit=()=>{
    setTodos(todos.map(el=>el.id===selectedTodo.id ? selectedTodo : el))
    seteditMode(false)
  }
  return (
    <div className="App">
      <header className="App-header">
        { editMode ? 
        (
          <div>
          <input type="text" onChange={e=>setSelectedTodo({...selectedTodo , text:e.target.value })} value={selectedTodo.text}/>
          <button onClick={edit}>Edit Todo</button>
        </div> 
        ):
          <div>
          <input type="text" onChange={e=>setnewTodo(e.target.value) } value={newTodo}/>
          <button onClick={add}>Add</button>
        </div>}
        {todos.map(el=> (
        <div style={{display:'flex',alignItems:"center"}}>
          <h3>{el.text}</h3>
          <button onClick={()=> deleteTodo(el.id)}>Delete</button>
          <button onClick={()=>{
           setSelectedTodo(el)
            seteditMode(true)}}>Edit</button>
        </div>
        )
        )
        }
      </header>
    </div>
  );
}

export default App;
