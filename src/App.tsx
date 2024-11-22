import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import styles from './App.module.scss'
import { useSelector } from 'react-redux';
import { RootState } from './store';

function App() {
  const todos = useSelector((state: RootState) => state.todos.todos)

  return (
    <div className={styles.wrapper}>
      <AddTodo/>

      {todos.length == 0 ? <div className={styles.text}>
        Пока нет задач
      </div> : <TodoList />}

    </div>
  );
}

export default App;
