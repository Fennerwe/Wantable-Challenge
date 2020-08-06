import _ from 'lodash'
import React from 'react'

import {
  ArtistTopAlbumsResponse,
} from '../../api/artists/ArtistTopAlbumsResponse'
import { AlbumCard } from '../../components/album-card/AlbumCard'
import * as classes from './ArtistProfile.module.scss'

export const TopAlbums = (props: {
  albums: ArtistTopAlbumsResponse['topalbums']['album']
}) => {
  if (_.isEmpty(props.albums)) {
    return null
  }

  return (
    <div className={classes.topAlbumsContainer}>
      <h2>Top 10 Albums</h2>
      <div className={classes.albumContainer}>
        {_.map(props.albums.slice(0, 10), (album) => (
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
