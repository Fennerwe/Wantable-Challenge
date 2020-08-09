import _ from 'lodash'
import React, { createContext, Reducer, useEffect, useReducer } from 'react'

import { loadSavedState, saveState } from '../utils'

const STORAGE_KEY = 'favoritesState'

interface FavoritesInfo {
  artistName: string
  dateAdded: string // date in IsoString format so it can be saved to local storage
}

interface FavoritesState {
  favorites: FavoritesInfo[]
}

const defaultState: FavoritesState = { favorites: [] }

const initialState: FavoritesState =
  loadSavedState<FavoritesState>(STORAGE_KEY) ?? defaultState

export type FavoritesActions =
  | { type: 'ADD'; payload: string }
  | { type: 'REMOVE'; payload: string }

export interface FavoritesProviderValue {
  state: FavoritesState
  dispatch: (action: FavoritesActions) => void
}

const favoritesValue: FavoritesProviderValue = {
  state: initialState,
  dispatch: (action) => {},
}

const reducer = (
  state: FavoritesState,
  action: FavoritesActions
): FavoritesState => {
  switch (action.type) {
    case 'ADD': {
      // clone array
      const favorites = state.favorites.slice()
      favorites.push({
        artistName: action.payload,
        dateAdded: new Date().toISOString(),
      })
      return {
        favorites: _.uniqBy(
          favorites,
          (favoriteInfo) => favoriteInfo.artistName
        ),
      }
    }
    case 'REMOVE': {
      const favorites = state.favorites.slice()

      _.remove(
        favorites,
        (favoriteInfo) => favoriteInfo.artistName === action.payload
      )
      return {
        favorites,
      }
    }
    default:
      return state
  }
}

export const favoritesStore = createContext(favoritesValue)
const { Provider } = favoritesStore

export const FavoritesProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer<Reducer<FavoritesState, any>>(
    reducer,
    initialState
  )

  const providerValue = { state, dispatch }

  useEffect(() => saveState(STORAGE_KEY, state), [state])

  return <Provider value={providerValue}>{children}</Provider>
}
