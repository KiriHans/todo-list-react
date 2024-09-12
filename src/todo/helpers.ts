import { TodoInterface } from "./pages/todo.page";

const TODO_KEY = "todos";

export const saveTodoListLocal = (todos: TodoInterface[]): void => {
  const updatedTodoList = JSON.stringify([...todos]);
  localStorage.setItem(TODO_KEY, updatedTodoList);
}

export const getTodoListLocal = (): TodoInterface[] => {
  const todoList: TodoInterface[] = JSON.parse(localStorage.getItem(TODO_KEY) ?? "[]") 
  return todoList;
}