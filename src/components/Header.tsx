import React from 'react'
import { type TodoTitle } from '../types'
import { CreateTodo } from './CreatedTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>todos
        <img src="https://react-typescript-cheatsheet.netlify.app/img/icon.png" alt="ts-react" width={80} height={80} />
      </h1>
      <CreateTodo
        saveTodo={onAddTodo}

      />
    </header>
  )
}
