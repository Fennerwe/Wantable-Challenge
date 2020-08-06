import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'

import * as commonClasses from '../../theme/commonStyles.module.scss'
import * as classes from './Layout.module.scss'

export const Layout = (props: { children: ReactElement }) => {
  const history = useHistory()

  return (
    <div>
      <div className={`${classes.header} ${commonClasses.clickable}`}>
        Wantable Coding Challenge
      </div>
      {props.children}
    </div>
  )
}
