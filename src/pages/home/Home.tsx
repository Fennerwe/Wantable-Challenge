import _ from 'lodash'
import React, { useState } from 'react'

import * as apiArtists from '../../api/artists/apiArtists'
import { ArtistSearchResponse } from '../../api/artists/ArtistSearchResponse'
import { AlbumCard } from '../../components/album-card/AlbumCard'
import * as classes from './Home.module.scss'

export const Home = (props: {}) => {
  const [artistName, setArtistName] = useState('')
  const [results, setResults] = useState({} as ArtistSearchResponse)

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
            <AlbumCard
              url={
                _.find(artist.image, (image) => image.size === 'extralarge')?.[
                  '#text'
                ]
              }
              cardTitle={artist.name}
            />
          ))}
        </div>
      )}
    </div>
  )
}
