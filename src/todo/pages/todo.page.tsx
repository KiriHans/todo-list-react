import { useEffect, useState } from "react"
import { TodoListComponent } from "../components/todo-list"
import styles from "./todo.module.css"
import { FormComponent } from "../components/form"
import { getTodoListLocal } from "../helpers"

export interface TodoInterface {
  id: string,
  title: string,
  isCompleted: boolean,
}

export type SetTodoType = React.Dispatch<React.SetStateAction<TodoInterface[]>>

export const TodoPage = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([])

  useEffect(() => {
    const todosStorage = getTodoListLocal()
    if (todosStorage.length !== 0) {
      setTodos(todosStorage);
    }

  }, [])

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Todo list</h2>
      <FormComponent todos={todos} setTodos={setTodos} />
      <TodoListComponent todos={todos} setTodos={setTodos} />
    </div>
  )
}
