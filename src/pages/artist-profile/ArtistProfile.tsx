import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { fetchArtistInfo } from '../../api/artists/apiArtists'
import { ArtistInfoResponse } from '../../api/artists/ArtistInfoResponse'

export const ArtistProfile = (props: {
  match: { params: { artistName: string } }
}) => {
  const history = useHistory()
  const [artistInfo, setArtistInfo] = useState({} as ArtistInfoResponse)

  useEffect(() => {
    fetchArtistInfo(decodeURI(props.match.params.artistName)).then((val) => {
      setArtistInfo(val)
    })
  })

  return (
    <div>
      {artistInfo && <pre>{JSON.stringify(artistInfo, undefined, 2)}</pre>}
    </div>
  )
}
