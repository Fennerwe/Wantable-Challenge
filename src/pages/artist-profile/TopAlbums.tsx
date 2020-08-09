import _ from 'lodash'
import React from 'react'

import { ArtistTopAlbumsResponse } from '../../api/artists/ArtistTopAlbumsResponse'
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
        {props.albums.slice(0, numberToShow).map((album) => (
          <AlbumCard
            key={album.url}
            imgUrl={
              _.find(album.image, (img) => img.size === 'extralarge')?.['#text']
            }
            albumName={album.name}
            albumUrl={album.url}
          />
        ))}
      </div>
    </div>
  )
}
