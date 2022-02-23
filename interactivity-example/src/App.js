import './App.css';

import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

function App() {
  const title = 'Todo App';
  let todos = [
    { task: 'Köp kaffe', done: false, id: 1 },
    { task: 'Köp tidning', done: false, id: 2 },
    { task: 'Brygg kaffe', done: false, id: 3 },
    { task: 'Drick kaffe', done: false, id: 4 },
    { task: 'Göra övning', done: false, id: 5 }
  ];

  const randomTodo = todos[Math.floor(Math.random() * todos.length)]
  console.log(randomTodo);
  // Skapar en TodoItem komponent för varje todo-objekt i arrayen ovan
  // Key behövs för att sätta ett unikt id på varje komponent
  const todoComponents = todos.map((todo) => {
    return <TodoItem task={ todo.task } done={ todo.done } key={ todo.id } />
  });

  function updateTodos(newTask) {
    const newTodo = {
      task: newTask,
      done: false,
      id: todos.length + 1
    }

    todos.push(newTodo);
    console.log('Ny todos array: ', todos);
  }

  return (
    <div className="App">
      <h1>{ title }</h1>
      
      <TodoItem task={ randomTodo.task } done={ randomTodo.done } />

      <ul>
        {/* <TodoItem task="Köp kaffe" done={ false } />
        <TodoItem task="Köp tidning" done={ false } />
        <TodoItem task="Brygg kaffe" done={ true } />
        <TodoItem task="Drick kaffe" done={ false } /> */}

        { todoComponents }
      </ul>

      <AddTodo updateTodos={ updateTodos } />
    </div>
  );
}

export default App;
