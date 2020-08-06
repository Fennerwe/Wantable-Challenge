import React, { ReactElement } from 'react'

import * as classes from './Card.module.scss'

export const Card = (props: { children: ReactElement; width?: string }) => {
  return (
    <div className={classes.card} style={{ width: props.width }}>
      {props.children}
    </div>
  )
}
