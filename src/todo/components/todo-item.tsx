import { useEffect, useRef, useState } from "react";
import { SetTodoType, TodoInterface } from "../pages/todo.page"
import styles from "./components.module.css";
import { saveTodoListLocal } from "../helpers";


interface TodoItemProps {
    todo: TodoInterface,
    setTodos: SetTodoType,
}

export const TodoItemComponent = ({ todo, setTodos }: TodoItemProps) => {

    const [isEditing, setIsEditing] = useState(false);

    const titleRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if (isEditing && titleRef.current) {
            titleRef.current.focus()
        }
    }, [isEditing])


    const handleCheckbox = () => {
        setTodos((todos) => {
            const newTodos = todos.map((item) => {
                if (item.id === todo.id) {
                    const newTodo: TodoInterface = { ...item, isCompleted: !item.isCompleted }
                    return newTodo
                }
                return item
            })

            saveTodoListLocal(newTodos);

            return newTodos
        }
        )

        setIsEditing(false);
    }

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault();

        setTodos((todos) => todos.map((item) => {
            if (item.id === todo.id) {
                const newTodo = { ...item, title: event.target.value }
                return newTodo
            }
            return item
        }))
    }

    const handleBlur: React.ChangeEventHandler<HTMLInputElement> = () => {
        setTodos((todos) => {
            saveTodoListLocal(todos);
            return todos;
        });
        setIsEditing(false);
    }

    const handleDeletion: React.MouseEventHandler<HTMLButtonElement> = () => {
        setTodos((todos) => {
            const newTodos = todos.filter((item) => item.id !== todo.id)
            saveTodoListLocal(newTodos);

            return newTodos;
        });

        setIsEditing(false);
    }

    const handleEdition = () => {

        setIsEditing(true);
    }

    return (
        <div className={styles["todo-item"]}>
            {isEditing ?
                (
                    <input type="text" defaultValue={todo.title} ref={titleRef} onChange={handleInputChange} onBlur={handleBlur} />

                ) : (
                    <>
                        <div className={styles.title} onClick={handleCheckbox} >
                            <input className={styles["checkbox"]} type="checkbox" defaultChecked={todo.isCompleted} name="is-completed" id={todo.id} />
                            <p onDoubleClick={handleEdition}>{todo.title}</p>
                        </div>
                        <div className={styles["buttons-todo"]}>
                            <button onClick={handleEdition}>Edit</button>
                            <button onClick={handleDeletion}>Delete</button>
                        </div>

                    </>
                )}

        </div>
    )
}
