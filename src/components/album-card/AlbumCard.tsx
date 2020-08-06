import React from 'react'
import { useHistory } from 'react-router-dom'

import * as commonClasses from '../../theme/commonStyles.module.scss'
import * as classes from './AlbumCard.module.scss'

export const AlbumCard = (props: { url?: string; artistName: string }) => {
  const history = useHistory()

  return (
    <div
      className={`${classes.albumCard} ${commonClasses.clickable}`}
      onClick={() => history.push(`artist/${encodeURI(props.artistName)}`)}
      onKeyPress={(ev) => {
        if (ev.key === 'Enter') {
          history.push(`artist/${encodeURI(props.artistName)}`)
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className={classes.album}>
        <div className={classes.artistName}>{props.artistName}</div>

        <img src={props.url} alt={props.artistName} />
      </div>
    </div>
  )
}
