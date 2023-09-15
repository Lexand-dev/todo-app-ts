import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    saveTodo({
      title: inputValue
    })
    setInputValue('')
  }

  return (
  <form onSubmit={handleSubmit}>
      <input
      type="text"
      className='new-todo'
      value={inputValue}
      onChange={handleChange}
      placeholder='¿Qué quieres hacer?'
      autoFocus
    />
  </form>
  )
}
