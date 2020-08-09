import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { apiFetch } from './apiCommon'
import { config } from './apiConfig'

describe('apiCommon', () => {
  let axiosMock: MockAdapter
  const mockResponseData = { stuff: [1, 2, 3], moreStuff: 'testString' }
  beforeAll(() => {
    axiosMock = new MockAdapter(axios)
    axiosMock.onAny().reply(200, mockResponseData)
  })

  afterEach(() => {
    axiosMock.resetHistory()
  })

  it('uses GET as the default HTTP verb', async () => {
    await apiFetch('')

    expect(axiosMock.history.get).toHaveLength(1)
  })

  it('includes the apiKey in the query parameters by default', async () => {
    const testUrl = 'testurl.com'
    await apiFetch(testUrl)

    expect(axiosMock.history.get[0].url).toContain(`api_key=${config.apiKey}`)
  })

  it("includes query parameters in the url if they're passed in", async () => {
    const testUrl = 'testurl.com'
    const testParams = { testParam: 'test' }
    await apiFetch(testUrl, {}, testParams)

    expect(axiosMock.history.get[0].url).toContain(
      `testParam=${testParams.testParam}`
    )
  })

  it('uses the passed in HTTP verb', async () => {
    await apiFetch('', { method: 'POST' })

    expect(axiosMock.history.get).toHaveLength(0)
    expect(axiosMock.history.post).toHaveLength(1)
  })

  it('returns the raw data from the http request', async () => {
    const actual = await apiFetch('')

    expect(actual).toStrictEqual(mockResponseData)
  })
})
