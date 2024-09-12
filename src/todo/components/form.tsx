import React from 'react'
import { SetTodoType, TodoInterface } from '../pages/todo.page';
import { saveTodoListLocal } from '../helpers';

import styles from "./components.module.css";
import { TodoForm } from './todo-form.interface';


interface FormProps {
    todos: TodoInterface[],
    setTodos: SetTodoType
}




export const FormComponent = ({ todos, setTodos }: FormProps) => {

    const handleSubmit = (event: React.FormEvent<TodoForm>) => {
        event.preventDefault()

        const { title } = event.currentTarget.elements;

        if (title.value.length === 0) return;

        const newTodo: TodoInterface = {
            title: title.value,
            isCompleted: false,
            id: self.crypto.randomUUID()
        }


        setTodos((todos) => [...todos, newTodo])
        saveTodoListLocal([...todos, newTodo])

        event.currentTarget.reset();
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} type="text" id="title" />
            <button type="submit">
                Add Todo
            </button>
        </form>
    )
}
