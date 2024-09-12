import './App.css'
import { TodoLayout } from './todo/layout/todo.layout'
import { TodoPage } from './todo/pages/todo.page'

function App() {

  return (
    <TodoLayout>
      <TodoPage />
    </TodoLayout>
  )
}

export default App
