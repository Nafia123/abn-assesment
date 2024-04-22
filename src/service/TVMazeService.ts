import axios from 'axios'
import type { SearchResponse } from '@/models/SearchResponse'
import type { Show } from '@/models/Show'


const base_url = 'https://api.tvmaze.com'

export async function searchTVShows(searchTerm: string): Promise<Array<SearchResponse>> {
  return axios.get(`${base_url}/search/shows`, {
    params: {
      q: searchTerm
    }
  }).then((res) => {
    return res.data
  })
}


export async function fetchTVShowFromId(id: number): Promise<Show> {
  return axios.get(`${base_url}/shows/${id}?embed[]=episodes&embed[]=cast`, {}).then((res) => {
    return res.data
  })
}