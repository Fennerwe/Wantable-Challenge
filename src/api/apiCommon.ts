import axios from 'axios'
import _ from 'lodash'
import qs from 'qs'

import { config } from './apiConfig'

interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data?: Object
}

export async function apiFetch<T>(
  url: string,
  options?: FetchOptions,
  queryParams?: any
): Promise<T> {
  _.defaults(options, { method: 'GET' })
  const qp = _.defaults({}, queryParams, { api_key: config.apiKey })

  url += `?${qs.stringify(qp, { indices: false })}`

  const result = await axios({
    url,
    ...options,
  })

  if (result.status !== 200) {
    // error handling, would probably create a toast or something on the page
    // that could display a 'An error occurred' message if the api request failed
  }

  return result.data
}
