import React, { useState, useReducer } from 'react';
import Todo from './Todo';


// ACTIONS object
export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}


// Reducer function
const reducer = (todos, action) => {
  if (action.type === ACTIONS.ADD_TODO) {
    return [...todos, newTodo(action.payload.name)]
  }
  if (action.type === ACTIONS.TOGGLE_TODO) {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, complete: !todo.complete }
      }
      return todo
    })
  }
  if(action.type === ACTIONS.DELETE_TODO){
    return todos.filter(todo => todo.id !== action.payload.id)
  }
}


// Newtodo
const newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false }
}


// App function
const App = (props) => {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    setName('')
  }

  console.log(todos)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
      </form>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          dispatch={dispatch}
        />
      ))
      }
    </>
  );
};

export default App;