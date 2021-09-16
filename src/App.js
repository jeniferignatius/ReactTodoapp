import React, {useState} from 'react';
import './App.css';

function App() {

  const[Todo, setTodo] = useState( {description:'', date: ''});
  const[Todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...Todo, [event.target.name]:event.target.value });
  }
 
  const Addtodo = () => {
    setTodos([...Todos, Todo]);
  }

  const deleteTodo = (row)=>{
    setTodos (Todos.filter((Todo, index) => index !== row))
  }
  return (
    <div className="App">
    
     <h3>Todo App</h3><br />
<input placeholder = "description" name= "description" value={Todo.description} onChange={inputChanged}/>
<input placeholder = "date" name= "date" value={Todo.date} onChange={inputChanged}/>
<button onClick={Addtodo}>Add</button><br/>
<table>
  <tbody>
    {
      Todos.map((Todo, index)=>
      <tr key ={index}>
       <td>
        {Todo.description}
       </td>
       <td>
        {Todo.date}
       </td>
       <td>
      <button onClick= {()=>deleteTodo(index)}>Delete</button>
       </td>
      </tr>
      )
    }
  </tbody>
</table>
</div>
);
}

export default App;