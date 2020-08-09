import React from 'react'

import * as commonClasses from '../../theme/commonStyles.module.scss'
import * as classes from './Card.module.scss'

export const Card = (props: {
  onClick?: () => void
  imgUrl?: string
  title: string
}) => {
  let className = classes.card
  if (props.onClick) {
    className += ` ${commonClasses.clickable}`
  }

  return (
    <div
      className={className}
      onClick={props.onClick}
      onKeyPress={(ev) => {
        if (ev.key === 'Enter' && props.onClick) {
          props.onClick()
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className={classes.image}>
        <div className={classes.cardTitle}>{props.title}</div>

        {props.imgUrl ? (
          <img src={props.imgUrl} alt={props.title} />
        ) : (
          <div className={classes.noImageFound}>No Image Found</div>
        )}
      </div>
    </div>
  )
}
