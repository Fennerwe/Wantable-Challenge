import { fireEvent, render } from '@testing-library/react'
import _ from 'lodash'
import React, { useContext } from 'react'

import * as utils from '../utils'
import {
  FavoritesProvider,
  FavoritesState,
  favoritesStore,
  reducer,
} from './FavoritesProvider'

describe('FavoritesProvider', () => {
  describe('reducer', () => {
    it('adds a favorite', () => {
      const state: FavoritesState = {
        favorites: [
          { artistName: 'Test Artist', dateAdded: new Date().toISOString() },
        ],
      }

      const artistToAdd = 'Another Test Artist'

      const actual = reducer(state, { type: 'ADD', payload: artistToAdd })

      expect(actual.favorites).toHaveLength(2)
      expect(
        _.find(actual.favorites, (fav) => fav.artistName === artistToAdd)
      ).not.toBeUndefined()
    })

    it('removes a favorite', () => {
      const artistToRemove = 'Another Test Artist'
      const state: FavoritesState = {
        favorites: [
          { artistName: 'Test Artist', dateAdded: new Date().toISOString() },
          { artistName: artistToRemove, dateAdded: new Date().toISOString() },
        ],
      }

      const actual = reducer(state, { type: 'REMOVE', payload: artistToRemove })

      expect(actual.favorites).toHaveLength(1)
      expect(
        _.find(actual.favorites, (fav) => fav.artistName === artistToRemove)
      ).toBeUndefined()
    })
  })

  describe('FavoritesProvider', () => {
    it('saves the state to local storage', async () => {
      const saveStateSpy = jest.spyOn(utils, 'saveState')

      const artistName = 'Test Artist'

      const buttonTestId = 'button-test'

      const TestComponent = (props: {}) => {
        const favorites = useContext(favoritesStore)

        return (
          <div>
            <FavoritesProvider>
              <button
                type="button"
                data-testid={buttonTestId}
                onClick={() => {
                  favorites.dispatch({ type: 'ADD', payload: artistName })
                }}
              >
                Button
              </button>
            </FavoritesProvider>
          </div>
        )
      }

      const view = render(<TestComponent />)

      const button = view.queryByTestId(buttonTestId)

      if (button) {
        fireEvent.click(button)
      }
      expect(saveStateSpy).toHaveBeenCalled()
    })
  })
})
