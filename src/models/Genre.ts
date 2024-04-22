import type { Show } from '@/models/Show'

export interface Genre {
  genre: string,
  id: number,
  items: Array<Show>
}

