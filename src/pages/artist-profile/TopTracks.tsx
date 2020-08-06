import _ from 'lodash'
import React from 'react'

import {
  ArtistTopTracksResponse,
} from '../../api/artists/ArtistTopTracksResponse'
import * as classes from './ArtistProfile.module.scss'

export const TopTracks = (props: {
  tracks: ArtistTopTracksResponse['toptracks']['track']
  numberToShow?: number
}) => {
  if (_.isNil(props.tracks)) {
    return null
  }

  const numberToShow = props.numberToShow ?? 20

  return (
    <div>
      <h2>{`Top ${numberToShow} Tracks`}</h2>
      <table className={classes.tracksTable}>
        <thead className={classes.header}>
          <tr>
            <th className={classes.nameCol}>Track Name</th>
            <th className={classes.standardCol}>Play Count</th>
            <th className={classes.standardCol}>Listeners</th>
            <th className={classes.standardCol}>Streamable</th>
            <th> </th>
          </tr>
        </thead>
        <tbody className={classes.striped}>
          {props.tracks.slice(0, numberToShow).map((track) => (
            <tr className={classes.row} key={track.mbid}>
              <td>{track.name}</td>
              <td>{Number(track.playcount).toLocaleString()}</td>
              <td>{Number(track.listeners).toLocaleString()}</td>
              <td>{track.streamable === '0' ? 'No' : 'Yes'}</td>
              <td>
                <a href={track.url} rel="noopener noreferrer" target="_blank">
                  Last.fm
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
