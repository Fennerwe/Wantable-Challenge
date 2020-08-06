import _ from 'lodash'
import React, { useState } from 'react'

import * as apiArtists from '../../api/artists/apiArtists'
import { ArtistSearchResponse } from '../../api/artists/ArtistSearchResponse'

export const Home = (props: {}) => {
  const [artistName, setArtistName] = useState('')
  const [results, setResults] = useState({} as ArtistSearchResponse)

  return (
    <div>
      <input
        type="text"
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
      {!_.isEmpty(results) &&
        _.map(results.results.artistmatches.artist, (artist, idx) => (
          <div key={idx}>
            {artist.name}
            <img
              src={
                _.find(artist.image, (image) => image.size === 'medium')?.[
                  '#text'
                ]
              }
              alt={artist.name}
            />
          </div>
        ))}
    </div>
  )
}
