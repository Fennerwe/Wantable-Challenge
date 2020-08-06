import _ from 'lodash'
import React from 'react'

import {
  ArtistTopAlbumsResponse,
} from '../../api/artists/ArtistTopAlbumsResponse'
import { AlbumCard } from '../../components/album-card/AlbumCard'
import * as classes from './ArtistProfile.module.scss'

export const TopAlbums = (props: {
  albums: ArtistTopAlbumsResponse['topalbums']['album']
  numberToShow?: number
}) => {
  if (_.isEmpty(props.albums)) {
    return null
  }

  const numberToShow = props.numberToShow ?? 10

  return (
    <div className={classes.topAlbumsContainer}>
      <h2>{`Top ${numberToShow} Albums`}</h2>
      <div className={classes.albumContainer}>
        {_.map(props.albums.slice(0, numberToShow), (album) => (
          <AlbumCard
            url={
              _.find(album.image, (img) => img.size === 'extralarge')?.['#text']
            }
            cardTitle={album.name}
          />
        ))}
      </div>
    </div>
  )
}
