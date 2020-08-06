import React from 'react'
import { useHistory } from 'react-router-dom'

import { Card } from '../card/Card'

export const ArtistCard = (props: { url?: string; artistName: string }) => {
  const history = useHistory()

  return (
    <Card
      onClick={() => {
        history.push(`/artist/${encodeURI(props.artistName)}`)
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }}
      imgUrl={props.url}
      cardTitle={props.artistName}
    />
  )
}
