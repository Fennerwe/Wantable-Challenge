import _ from 'lodash'
import React, { useState } from 'react'

import * as apiArtists from '../../api/artists/apiArtists'
import { ArtistSearchResponse } from '../../api/artists/ArtistSearchResponse'
import { Card } from '../../components/card/Card'

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
          <Card key={idx} width="300px">
            <div>
              {artist.name}
              <img
                src={
                  _.find(artist.image, (image) => image.size === 'large')?.[
                    '#text'
                  ]
                }
                alt={artist.name}
              />
            </div>
          </Card>
        ))}
    </div>
  )
}
