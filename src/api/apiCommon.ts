import axios from 'axios'
import _ from 'lodash'
import qs from 'qs'

import { config } from './apiConfig'

interface FetchOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data?: Object
}

export async function apiFetch<T>(
  url: string,
  options: FetchOptions,
  queryParams?: any
): Promise<T> {
  _.defaults(options, { method: 'GET' })
  _.defaults(queryParams, { api_key: config.apiKey })

  if (queryParams) {
    url += `?${qs.stringify(queryParams, { indices: false })}`
  }

  const result = await axios({
    url,
    ...options,
  })

  if (result.status !== 200) {
    // error handling
  }

  return result.data
}
