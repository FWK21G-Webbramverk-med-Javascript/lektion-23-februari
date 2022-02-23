import './App.css';

import TodoItem from './components/TodoItem';

function App() {
  const title = 'Todo App';
  let todos = [
    { task: 'Köp kaffe', done: false, id: 1 },
    { task: 'Köp tidning', done: false, id: 2 },
    { task: 'Brygg kaffe', done: false, id: 3 },
    { task: 'Drick kaffe', done: false, id: 4 },
    { task: 'Göra övning', done: false, id: 5 }
  ];

  // Skapar en TodoItem komponent för varje todo-objekt i arrayen ovan
  // Key behövs för att sätta ett unikt id på varje komponent
  const todoComponents = todos.map((todo) => {
    return <TodoItem task={ todo.task } done={ todo.done } key={ todo.id } />
  });

  return (
    <div className="App">
      <h1>{ title }</h1>

      <ul>
        {/* <TodoItem task="Köp kaffe" done={ false } />
        <TodoItem task="Köp tidning" done={ false } />
        <TodoItem task="Brygg kaffe" done={ true } />
        <TodoItem task="Drick kaffe" done={ false } /> */}

        { todoComponents }
      </ul>
    </div>
  );
}

export default App;
