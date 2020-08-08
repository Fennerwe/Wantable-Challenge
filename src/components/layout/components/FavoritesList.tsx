import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'

import { favoritesStore } from '../../../state/favorites/FavoritesProvider'
import * as classes from './FavoritesList.module.scss'

export const FavoritesList = (props: {}) => {
  const favorites = useContext(favoritesStore)
  const [isListVisible, setIsListVisible] = useState(false)

  return (
    <div
      onMouseOver={() => setIsListVisible(true)}
      onFocus={() => setIsListVisible(true)}
      onMouseLeave={() => setIsListVisible(false)}
      onBlur={() => setIsListVisible(false)}
    >
      <button type="button">Favorites</button>
      <div className={classes.listContainer}>
        {isListVisible && (
          <div className={classes.list}>
            <table className={classes.listTable}>
              <thead>
                <tr className={classes.row}>
                  <td className={classes.cell}>Name</td>
                  <td className={classes.cell}>Date Added</td>
                  <td className={classes.cell}> </td>
                </tr>
              </thead>
              <tbody>
                {favorites.state.favorites.map((fav) => (
                  <tr key={fav.artistName} className={classes.row}>
                    <td className={classes.cell}>{fav.artistName}</td>
                    <td className={classes.cell}>
                      {fav.dateAdded.toISOString().split('T')[0]}
                    </td>
                    <td className={`${classes.cell} ${classes.deleteIcon}`}>
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        onClick={
                          () =>
                            favorites.dispatch({
                              type: 'REMOVE',
                              payload: fav.artistName,
                            })
                          // eslint-disable-next-line react/jsx-curly-newline
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
