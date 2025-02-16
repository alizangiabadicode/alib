import type { Hotel, HotelSearchParams } from '~/models/hotels'
import { get } from './http'

async function getHotels(query: HotelSearchParams): Promise<Hotel[]> {
  const res = await get('hotels', {
    params: query,
  })

  return res.data || []
}

export { getHotels }
