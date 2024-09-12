import { SetTodoType, TodoInterface } from "../pages/todo.page";
import { TodoItemComponent } from "./todo-item";
import styles from "./components.module.css";

interface TodoListProps {
    todos: TodoInterface[],
    setTodos: SetTodoType
}

export const TodoListComponent = ({ todos, setTodos }: TodoListProps) => {
    return (
        <ol className={styles.ol}>
            {todos && todos.length > 0 ? todos.map((todo) => (
                <TodoItemComponent todo={todo} setTodos={setTodos} key={todo.id} />
            )) : (<div>Nothing to see here</div>)}
        </ol>
    )
}
