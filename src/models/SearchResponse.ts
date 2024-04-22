import type { Show } from '@/models/Show'

export interface SearchResponse {
  score: number,
  show: Show
}