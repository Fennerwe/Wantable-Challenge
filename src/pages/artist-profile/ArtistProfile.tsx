import _ from 'lodash'
import React, { useEffect, useState } from 'react'

import { fetchArtistInfo } from '../../api/artists/apiArtists'
import { ArtistInfoResponse } from '../../api/artists/ArtistInfoResponse'
import { AlbumCard } from '../../components/album-card/AlbumCard'
import { Pill } from '../../components/pill/Pill'
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
        <div className={classes.infoContainer}>
          <div className={classes.bio}>
            <h2>Bio</h2>
            <div
              // the bio content contains links to last.fm, so we need to set the html
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
                  <tbody>
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {!_.isEmpty(artistInfo?.artist?.similar?.artist) && (
        <div className={classes.similarArtistsContainer}>
          <h1>Similar Artists</h1>
          <div className={classes.albumContainer}>
            {_.map(artistInfo.artist.similar.artist, (artist, idx) => (
              <AlbumCard
                url={
                  _.find(artist.image, (img) => img.size === 'mega')?.['#text']
                }
                artistName={artist.name}
                key={idx}
              />
            ))}
          </div>
        </div>
      )}

      {!_.isEmpty(artistInfo?.artist?.tags.tag) && (
        <div className={classes.tagsContainer}>
          <h2>Tags</h2>
          <div className={classes.tags}>
            {_.map(artistInfo.artist.tags.tag, (tag, idx) => (
              <Pill key={idx} onClick={() => window.open(tag.url, '_blank')}>
                <span>{_.capitalize(tag.name)}</span>
              </Pill>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
