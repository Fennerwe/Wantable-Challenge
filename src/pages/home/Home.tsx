import React, { useState } from 'react'
import * as apiArtists from '../../api/artists/apiArtists'
import _ from 'lodash'

export const Home = (props: {}) => {
  const [artistName, setArtistName] = useState('')
  const [results, setResults] = useState({})

  return (
    <div>
      <input
        type="text"
        value={artistName}
        onChange={(ev) => setArtistName(ev.target.value)}
        onKeyPress={async (ev) => {
          console.log('EVENT KEY:', ev.key, '|', ev.key === 'Enter')
          if (ev.key === 'Enter') {
            console.log('did this happen')
            const result = await apiArtists.searchArtist(artistName)
            setResults(result)
          }
        }}
      />
      {!_.isEmpty(results) && (
        <pre>{JSON.stringify(results, undefined, 2)}</pre>
      )}
    </div>
  )
}
