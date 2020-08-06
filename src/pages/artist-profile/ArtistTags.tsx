import _ from 'lodash'
import React from 'react'

import { ArtistInfoResponse } from '../../api/artists/ArtistInfoResponse'
import { Pill } from '../../components/pill/Pill'
import * as classes from './ArtistProfile.module.scss'

export const ArtistTags = (props: {
  tags: ArtistInfoResponse['artist']['tags']['tag']
}) => {
  if (_.isEmpty(props.tags)) {
    return null
  }

  return (
    <div className={classes.tagsContainer}>
      <h2>Tags</h2>
      <div className={classes.tags}>
        {_.map(props.tags, (tag, idx) => (
          <Pill key={idx} onClick={() => window.open(tag.url, '_blank')}>
            <span>{_.capitalize(tag.name)}</span>
          </Pill>
        ))}
      </div>
    </div>
  )
}
