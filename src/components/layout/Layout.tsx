import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'

import { FavoritesProvider } from '../../state/favorites/FavoritesProvider'
import * as commonClasses from '../../theme/commonStyles.module.scss'
import { FavoritesList } from './components/FavoritesList'
import * as classes from './Layout.module.scss'

export const Layout = (props: { children: ReactElement }) => {
  const history = useHistory()

  return (
    <FavoritesProvider>
      <div>
        <div className={classes.header}>
          <div
            className={`${classes.logo} ${commonClasses.clickable}`}
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
          <FavoritesList />
        </div>
        {props.children}
      </div>
    </FavoritesProvider>
  )
}
