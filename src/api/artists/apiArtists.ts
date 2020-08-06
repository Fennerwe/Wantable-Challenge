import { apiFetch } from '../apiCommon'
import { ArtistInfoResponse } from './ArtistInfoResponse'
import { ArtistSearchResponse } from './ArtistSearchResponse'

const baseUrl = 'http://ws.audioscrobbler.com/2.0/'

export const searchArtist = async (
  artistName: string
): Promise<ArtistSearchResponse> => {
  const result = await apiFetch<ArtistSearchResponse>(
    baseUrl,
    { method: 'GET' },
    { method: 'artist.search', artist: artistName, format: 'json' }
  )

  return result
}

export const fetchArtistInfo = async (
  artistName: string
): Promise<ArtistInfoResponse> => {
  const result = await apiFetch<ArtistInfoResponse>(
    baseUrl,
    { method: 'GET' },
    { method: 'artist.getinfo', artist: artistName, format: 'json' }
  )

  return result
}
