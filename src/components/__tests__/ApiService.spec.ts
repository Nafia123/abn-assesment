import { describe, it, expect } from 'vitest'

import { fetchTVShowFromId, searchTVShows } from '../../service/TVMazeService'

describe('API', () => {
  it('Fetches Correctly', async () => {
    const searches = await searchTVShows('test')
    expect(searches.length).toBeGreaterThan(0)
  })

  it('Fetches show id Correctly', async () => {
    const show = await fetchTVShowFromId(1)
    expect(show.id).not.toBeNull()
  })
})
