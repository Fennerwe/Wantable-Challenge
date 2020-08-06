import React, { ReactElement } from 'react'

import * as commonClasses from '../../theme/commonStyles.module.scss'
import * as classes from './Pill.module.scss'

export const chooseRandomColor = (): string => {
  const colors = ['pink', 'purple', 'blue', 'red', 'green', 'yellow']

  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  switch (randomColor) {
    case 'pink':
      return classes.pink
    case 'purple':
      return classes.purple
    case 'blue':
      return classes.blue
    case 'red':
      return classes.red
    case 'green':
      return classes.green
    case 'yellow':
      return classes.yellow
    default:
      return classes.red
  }
}

export const Pill = (props: {
  children: ReactElement
  onClick?: () => void
}) => {
  const className = `${classes.pill} ${
    commonClasses.clickable
  } ${chooseRandomColor()}`

  return (
    <div
      className={className}
      onClick={props.onClick}
      onKeyPress={(ev) => {
        if (ev.key === 'Enter' && props.onClick) {
          props.onClick()
        }
      }}
      tabIndex={0}
      role="button"
    >
      {props.children}
    </div>
  )
}
