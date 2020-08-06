import _ from 'lodash'
import React, { useEffect, useState } from 'react'

import { fetchArtistInfo } from '../../api/artists/apiArtists'
import { ArtistInfoResponse } from '../../api/artists/ArtistInfoResponse'
import * as classes from './ArtistProfile.module.scss'

export const ArtistProfile = (props: {
  match: { params: { artistName: string } }
}) => {
  const [artistInfo, setArtistInfo] = useState({} as ArtistInfoResponse)

  useEffect(() => {
    fetchArtistInfo(decodeURI(props.match.params.artistName)).then((val) => {
      setArtistInfo(val)
    })
  }, [props.match.params.artistName])

  return (
    <div className={classes.container}>
      {!_.isEmpty(artistInfo) && (
        <div>
          <div className={classes.infoContainer}>
            <div className={classes.bio}>
              <h2>Bio</h2>
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: artistInfo.artist.bio.content,
                }}
              />
            </div>
            <div className={classes.picAndStats}>
              <div>
                <img
                  src={
                    _.find(
                      artistInfo.artist.image,
                      (img) => img.size === 'mega'
                    )?.['#text']
                  }
                  alt="Profile Pic"
                />
              </div>

              <div className={classes.stats}>
                <h3 className={classes.statsHeader}>Stats:</h3>
                <div>
                  <table>
                    <tr>
                      <td>On Tour:</td>
                      <td>
                        {artistInfo.artist.ontour === '1' ? 'YES!' : 'No'}
                      </td>
                    </tr>
                    <tr>
                      <td>Streamable:</td>
                      <td>
                        {artistInfo.artist.streamable === '1' ? 'Yes' : 'No'}
                      </td>
                    </tr>
                    <tr>
                      <td>Listeners:</td>
                      <td>
                        {Number(
                          artistInfo.artist.stats.listeners
                        ).toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td>Play Count:</td>
                      <td>
                        {Number(
                          artistInfo.artist.stats.playcount
                        ).toLocaleString()}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {artistInfo && <pre>{JSON.stringify(artistInfo, undefined, 2)}</pre>}
    </div>
  )
}
