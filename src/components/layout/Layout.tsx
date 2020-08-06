import React, { ReactElement } from 'react'

import * as classes from './Layout.module.scss'

export const Layout = (props: { children: ReactElement }) => {
  return (
    <div>
      <div className={classes.header}>Wantable Coding Challenge</div>
      {props.children}
    </div>
  )
}
