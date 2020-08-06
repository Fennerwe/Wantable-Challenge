import _ from 'lodash'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import * as apiArtists from '../../api/artists/apiArtists'
import { ArtistSearchResponse } from '../../api/artists/ArtistSearchResponse'
import * as commonClasses from '../../theme/commonStyles.module.scss'
import * as classes from './Home.module.scss'

export const Home = (props: {}) => {
  const [artistName, setArtistName] = useState('')
  const [results, setResults] = useState({} as ArtistSearchResponse)

  const history = useHistory()

  return (
    <div className={classes.pageContainer}>
      <div className={classes.searchBarContainer}>
        <input
          className={classes.searchBar}
          type="text"
          placeholder="Search for an artist..."
          value={artistName}
          onChange={(ev) => setArtistName(ev.target.value)}
          onKeyPress={async (ev) => {
            if (ev.key === 'Enter') {
              const result = await apiArtists.searchArtist(artistName)
              if (result) {
                setResults(result)
              }
            }
          }}
        />
      </div>

      {!_.isEmpty(results) && (
        <div className={classes.cardContainer}>
          {_.map(results.results.artistmatches.artist, (artist, idx) => (
            <div
              className={`${classes.albumCard} ${commonClasses.clickable}`}
              key={idx}
              onClick={() => history.push(`artist/${artist.name}`)}
              onKeyPress={(ev) => {
                if (ev.key === 'Enter') {
                  history.push(`artist/${artist.name}`)
                }
              }}
              role="button"
              tabIndex={idx}
            >
              <div className={classes.album}>
                <div className={classes.artistName}>{artist.name}</div>

                <img
                  src={
                    _.find(
                      artist.image,
                      (image) => image.size === 'extralarge'
                    )?.['#text']
                  }
                  alt={artist.name}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
