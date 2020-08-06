import _ from 'lodash'
import React from 'react'

import { ArtistInfoResponse } from '../../api/artists/ArtistInfoResponse'
import { ArtistCard } from '../../components/artist-card/ArtistCard'
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
          <ArtistCard
            url={_.find(artist.image, (img) => img.size === 'mega')?.['#text']}
            artistName={artist.name}
            key={idx}
          />
        ))}
      </div>
    </div>
  )
}
