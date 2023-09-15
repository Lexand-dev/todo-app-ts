import { useState } from 'react'
import { Todos } from './components/Todos'

import { type FilterValue, type TodoId, type TodoTitle, type Todo as TypeTodo } from '../src/types'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { TODO_FILTERS } from './consts'

const mockTodos = [
  {
    id: '1',
    title: 'Ver Twitch de midu',
    completed: true
  },
  {
    id: '2',
    title: 'Aprender React con TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Sacar Ticket de la PlatziConf',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filter, setFilter] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TypeTodo, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    }
    )
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: string): void => {
    setFilter(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.filter(todo => todo.completed).length

  const filterTodos = todos.filter(todo => {
    if (filter === TODO_FILTERS.ACTIVE) {
      return !todo.completed
    }
    if (filter === TODO_FILTERS.COMPLETED) {
      return todo.completed
    }
    return todo
  })

  return (
    <>
      <div className='todoapp'>
        <Header onAddTodo={handleAddTodo} />
      <Todos
        onRemoveTodo={handleRemove}
        onToggleCompleted={handleCompleted}
        todos={filterTodos}
        />
        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          filterSelected={filter}
          onClearCompleted={handleRemoveAllCompleted}
          handleFilterChange={handleFilterChange}
        />
      </div>
    </>
  )
}

export default App
