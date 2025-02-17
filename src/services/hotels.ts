import type { Hotel, HotelSearchParams } from '~/models/hotels'
import { get } from './http'

async function getHotels(query: HotelSearchParams): Promise<{ [key: string]: Hotel }> {
  const res = await get('hotels', {
    params: query,
  })
  const dataMapped = (res.data || []).reduce((acc: any, item: Hotel) => {
    acc[item.id] = item
    return acc
  }, {})

  return dataMapped
}

async function getHotel(id: string): Promise<Hotel | null> {
  const res = await get(`hotels/${id}`)

  return res.data
}

export { getHotel, getHotels }
