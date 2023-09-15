import React from 'react'
import { FILTERS_BUTTONS } from '../consts'
import { type FilterValue } from '../types'

interface Props {
  onFilterChange: (filter: FilterValue) => void
  filterSelected: FilterValue
}

export const Filters: React.FC<Props> = ({
  filterSelected, onFilterChange
}) => {
  const handleClick = (filter: FilterValue) => (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    event.preventDefault()
    onFilterChange(filter)
  }

  return (
    <ul className="filters">
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = filterSelected === key
          const className = isSelected ? 'selected' : ''
          return (
            <li key={key}
            className={className}>
            <a
              href={href}
              onClick={handleClick(key as FilterValue)}
          >
              {literal}
            </a>
          </li>
          )
        }
        )
      }
    </ul>

  )
}
