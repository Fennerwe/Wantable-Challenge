import React from 'react'
import { useHistory } from 'react-router-dom'

export const ArtistProfile = (props: {
  match: { params: { artistName: string } }
}) => {
  const history = useHistory()

  return (
    <div>
      <button type="button" onClick={() => history.push('/')}>
        Back to Search
      </button>
      <h1>{props.match.params.artistName}</h1>
    </div>
  )
}
