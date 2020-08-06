import { apiFetch } from '../apiCommon'
import { ArtistSearchResponse } from './ArtistSearchResponse'

export const searchArtist = async (
  artistName: string
): Promise<ArtistSearchResponse | undefined> => {
  const result = await apiFetch<ArtistSearchResponse>(
    'http://ws.audioscrobbler.com/2.0/',
    { method: 'GET' },
    { method: 'artist.search', artist: artistName, format: 'json' }
  )

  if (result) {
    return result
  }

  return undefined
}
