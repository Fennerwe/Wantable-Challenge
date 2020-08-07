import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'

import * as commonClasses from '../../theme/commonStyles.module.scss'
import * as classes from './Layout.module.scss'

export const Layout = (props: { children: ReactElement }) => {
  const history = useHistory()

  return (
    <div>
      <div
        className={`${classes.header} ${commonClasses.clickable}`}
        onClick={() => history.push('/')}
        onKeyPress={(ev) => {
          if (ev.key === 'Enter') {
            history.push('/')
          }
        }}
        tabIndex={0}
        role="button"
      >
        Wantable Coding Challenge
      </div>
      {props.children}
    </div>
  )
}
