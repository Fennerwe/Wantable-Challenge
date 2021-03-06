import { faStar as faStar_R } from '@fortawesome/free-regular-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import _ from 'lodash'
import React, { useContext, useEffect, useState } from 'react'

import {
  fetchArtistInfo,
  fetchArtistTopAlbums,
  fetchArtistTopTracks,
} from '../../api/artists/apiArtists'
import { ArtistInfoResponse } from '../../api/artists/ArtistInfoResponse'
import { ArtistTopAlbumsResponse } from '../../api/artists/ArtistTopAlbumsResponse'
import { ArtistTopTracksResponse } from '../../api/artists/ArtistTopTracksResponse'
import { favoritesStore } from '../../state/favorites/FavoritesProvider'
import * as commonClasses from '../../theme/commonStyles.module.scss'
import * as classes from './ArtistProfile.module.scss'
import { ArtistTags } from './ArtistTags'
import { SimilarArtists } from './SimilarArtists'
import { TopAlbums } from './TopAlbums'
import { TopTracks } from './TopTracks'

export const ArtistProfile = (props: {
  match: { params: { artistName: string } }
}) => {
  const [artistInfo, setArtistInfo] = useState({} as ArtistInfoResponse)
  const [topAlbums, setTopAlbums] = useState({} as ArtistTopAlbumsResponse)
  const [topTracks, setTopTracks] = useState({} as ArtistTopTracksResponse)

  const favorites = useContext(favoritesStore)

  const artistName = decodeURI(props.match.params.artistName)

  useEffect(() => {
    fetchArtistInfo(artistName).then((val) => {
      setArtistInfo(val)
    })

    fetchArtistTopAlbums(artistName).then((val) => {
      setTopAlbums(val)
    })

    fetchArtistTopTracks(artistName).then((val) => {
      setTopTracks(val)
    })
  }, [artistName])

  return (
    <div className={classes.container}>
      {!_.isEmpty(artistInfo) && (
        <div className={classes.infoContainer}>
          <div className={classes.bio}>
            <h1>{artistName}</h1>
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
                <table className={classes.statsTable}>
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
              <div className={classes.favorite}>
                {
                  _.find(
                    favorites.state.favorites,
                    (fav) => fav.artistName === artistName
                  ) ? (
                    /* eslint-disable @typescript-eslint/indent, react/jsx-curly-newline */
                    <div>
                      Unfavorite:{' '}
                      <FontAwesomeIcon
                        className={commonClasses.clickable}
                        icon={faStar}
                        onClick={() =>
                          favorites.dispatch({
                            type: 'REMOVE',
                            payload: artistName,
                          })
                        }
                      />
                    </div>
                  ) : (
                    <div>
                      Favorite:{' '}
                      <FontAwesomeIcon
                        className={commonClasses.clickable}
                        icon={faStar_R}
                        onClick={() =>
                          favorites.dispatch({
                            type: 'ADD',
                            payload: artistName,
                          })
                        }
                      />
                    </div>
                  ) /* eslint-enable @typescript-eslint/indent, react/jsx-curly-newline */
                }
              </div>
            </div>
          </div>
        </div>
      )}

      <TopAlbums albums={topAlbums?.topalbums?.album} />
      <TopTracks tracks={topTracks?.toptracks?.track} />
      <SimilarArtists artists={artistInfo?.artist?.similar?.artist} />
      <ArtistTags tags={artistInfo?.artist?.tags?.tag} />
    </div>
  )
}
