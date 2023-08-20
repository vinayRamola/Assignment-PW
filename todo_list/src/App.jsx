import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'

function App() {
  const [list, setList] = useState([
    {id: 1, todoData: 'Todo 1', finished: false},
    {id: 2, todoData: 'Todo 2', finished: false},
  ]);


  return (
    <>
      <div>
        <h1>Todo List</h1>
        <AddTodo updateList={(todo) => setList([...list],{id: list.length + 1 ,todoData: todo, finished: false})} />
        <TodoList list={list} />
      </div> 
    </>
  )
}

export default App
