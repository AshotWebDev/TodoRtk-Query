import TodoForm from './components/TodoForm/TodoForm';
import TodoItems from './components/TodoItems/TodoItems';
import './App.css';
import { useState } from 'react';

function App() {
  const [filterInfo, setFilterInfo] = useState('')
  return (
    <div className="App">
      <TodoForm  {...{setFilterInfo}}/>
      <TodoItems {...{filterInfo}}/>
    </div>
  );
}

export default App;
