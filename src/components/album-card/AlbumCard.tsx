import React from 'react'

import { Card } from '../card/Card'

export const AlbumCard = (props: {
  imgUrl?: string
  albumName: string
  albumUrl: string
}) => {
  return (
    <Card
      onClick={() => window.open(props.albumUrl, '_blank')}
      imgUrl={props.imgUrl}
      cardTitle={props.albumName}
    />
  )
}
