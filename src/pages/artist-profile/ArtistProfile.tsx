import _ from 'lodash'
import React, { useEffect, useState } from 'react'

import {
  fetchArtistInfo,
  fetchArtistTopTracks,
} from '../../api/artists/apiArtists'
import { ArtistInfoResponse } from '../../api/artists/ArtistInfoResponse'
import {
  ArtistTopAlbumsResponse,
} from '../../api/artists/ArtistTopAlbumsResponse'
import { AlbumCard } from '../../components/album-card/AlbumCard'
import { Pill } from '../../components/pill/Pill'
import * as classes from './ArtistProfile.module.scss'

export const ArtistProfile = (props: {
  match: { params: { artistName: string } }
}) => {
  const [artistInfo, setArtistInfo] = useState({} as ArtistInfoResponse)
  const [topTracks, setTopTracks] = useState({} as ArtistTopAlbumsResponse)

  useEffect(() => {
    const artistName = decodeURI(props.match.params.artistName)
    fetchArtistInfo(artistName).then((val) => {
      setArtistInfo(val)
    })

    fetchArtistTopTracks(artistName).then((val) => {
      setTopTracks(val)
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

      {!_.isEmpty(topTracks?.topalbums?.album) && (
        <div className={classes.topAlbumsContainer}>
          <h2>Top 10 Albums</h2>
          <div className={classes.albumContainer}>
            {_.map(topTracks.topalbums.album.slice(0, 10), (album) => (
              <AlbumCard
                url={
                  _.find(album.image, (img) => img.size === 'extralarge')?.[
                    '#text'
                  ]
                }
                cardTitle={album.name}
              />
            ))}
          </div>
        </div>
      )}

      {!_.isEmpty(artistInfo?.artist?.similar?.artist) && (
        <div className={classes.similarArtistsContainer}>
          <h2>Similar Artists</h2>
          <div className={classes.albumContainer}>
            {_.map(artistInfo.artist.similar.artist, (artist, idx) => (
              <AlbumCard
                url={
                  _.find(artist.image, (img) => img.size === 'mega')?.['#text']
                }
                cardTitle={artist.name}
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
