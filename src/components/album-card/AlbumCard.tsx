import React from 'react'
import { useHistory } from 'react-router-dom'

import * as commonClasses from '../../theme/commonStyles.module.scss'
import * as classes from './AlbumCard.module.scss'

export const AlbumCard = (props: { url?: string; cardTitle: string }) => {
  const history = useHistory()

  return (
    <div
      className={`${classes.albumCard} ${commonClasses.clickable}`}
      onClick={() => history.push(`artist/${encodeURI(props.cardTitle)}`)}
      onKeyPress={(ev) => {
        if (ev.key === 'Enter') {
          history.push(`artist/${encodeURI(props.cardTitle)}`)
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className={classes.album}>
        <div className={classes.artistName}>{props.cardTitle}</div>

        <img src={props.url} alt={props.cardTitle} />
      </div>
    </div>
  )
}
