import { useTodos } from './hooks/useTodos';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import styles from './App.module.scss'

function App() {
  const {todos, addHandler, updateHandler, deleteHandler} = useTodos()

  return (
    <div className={styles.wrapper}>
      <AddTodo
        addHandler={addHandler}
      />

      {todos.length == 0 ? <div className={styles.text}>
        Пока нет задач
      </div> :
      <TodoList
        todos={todos}
        updateHandler={updateHandler}
        deleteHandler={deleteHandler}
      />}

    </div>
  );
}

export default App;
