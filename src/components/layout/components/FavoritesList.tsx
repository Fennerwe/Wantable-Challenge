import { faAngleDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { favoritesStore } from '../../../state/favorites/FavoritesProvider'
import * as commonClasses from '../../../theme/commonStyles.module.scss'
import * as classes from './FavoritesList.module.scss'

export const FavoritesList = (props: {}) => {
  const history = useHistory()
  const favorites = useContext(favoritesStore)
  const [isListVisible, setIsListVisible] = useState(false)

  return (
    <div
      onMouseOver={() => setIsListVisible(true)}
      onFocus={() => setIsListVisible(true)}
      onMouseLeave={() => setIsListVisible(false)}
      onBlur={() => setIsListVisible(false)}
    >
      <div className={classes.favorites}>
        Favorites <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <div className={classes.listContainer}>
        {isListVisible && (
          <div className={classes.list}>
            {favorites.state.favorites.length > 0 ? (
              <table className={classes.listTable}>
                <thead>
                  <tr className={classes.row}>
                    <td className={classes.cell}>Name</td>
                    <td className={classes.cell}>Date Added</td>
                    <td className={classes.cell}> </td>
                  </tr>
                </thead>
                <tbody className={classes.tableBody}>
                  {favorites.state.favorites.map((fav, idx) => (
                    <tr key={fav.artistName} className={classes.row}>
                      <td
                        className={`${classes.cell} ${commonClasses.clickable}`}
                      >
                        <div
                          tabIndex={idx}
                          role="button"
                          onClick={() =>
                            history.push(`/artist/${encodeURI(fav.artistName)}`)
                          }
                          onKeyPress={(ev) => {
                            if (ev.key === 'Enter') {
                              history.push(
                                `/artist/${encodeURI(fav.artistName)}`
                              )
                            }
                          }}
                        >
                          {fav.artistName}
                        </div>
                      </td>
                      <td className={classes.cell}>
                        {fav.dateAdded.split('T')[0]}
                      </td>
                      <td className={`${classes.cell} ${classes.deleteIcon}`}>
                        <FontAwesomeIcon
                          className={commonClasses.clickable}
                          icon={faTrashAlt}
                          onClick={() =>
                            favorites.dispatch({
                              type: 'REMOVE',
                              payload: fav.artistName,
                            })
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className={classes.noFavoritesContainer}>
                <div className={classes.noFavorites}>No favorites yet</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
