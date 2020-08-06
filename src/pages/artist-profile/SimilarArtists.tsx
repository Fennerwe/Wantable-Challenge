import _ from 'lodash'
import React from 'react'

import { ArtistInfoResponse } from '../../api/artists/ArtistInfoResponse'
import { AlbumCard } from '../../components/album-card/AlbumCard'
import * as classes from './ArtistProfile.module.scss'

export const SimilarArtists = (props: {
  artists: ArtistInfoResponse['artist']['similar']['artist']
}) => {
  if (_.isEmpty(props.artists)) {
    return null
  }

  return (
    <div className={classes.similarArtistsContainer}>
      <h2>Similar Artists</h2>
      <div className={classes.albumContainer}>
        {_.map(props.artists, (artist, idx) => (
          <AlbumCard
            url={_.find(artist.image, (img) => img.size === 'mega')?.['#text']}
            cardTitle={artist.name}
            key={idx}
          />
        ))}
      </div>
    </div>
  )
}
