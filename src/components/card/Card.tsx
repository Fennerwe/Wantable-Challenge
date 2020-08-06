import React, { ReactElement } from 'react'

import * as commonClasses from '../../theme/commonStyles.module.scss'
import * as classes from './Card.module.scss'

export const Card = (props: {
  children: ReactElement
  width?: string
  onClick?: () => void
}) => {
  let className = classes.card
  if (props.onClick) {
    className += ` ${commonClasses.clickable}`
  }
  return (
    <div
      tabIndex={0}
      className={className}
      style={{ width: props.width }}
      onClick={props.onClick}
      onKeyPress={(ev) => {
        if (ev.key === 'Enter' && props.onClick) {
          props.onClick()
        }
      }}
      role="button"
    >
      {props.children}
    </div>
  )
}
