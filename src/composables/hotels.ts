import type { HotelSearchParams } from '~/models/hotels'
import { useQuery } from '@tanstack/vue-query'
import { getHotel, getHotels } from '~/services/hotels'

function useHotelsDataProvider(filters: MaybeRef<HotelSearchParams> = {
  q: '',
}) {
  const hotelsQuery = useQuery({
    queryKey: computed(() => ['hotels', unref(filters)]),
    queryFn: ({ queryKey: [, filters] }) => {
      console.warn(filters)
      return getHotels(filters as HotelSearchParams)
    },
  })

  const getAllHotels = computed(() => {
    return Object.values(hotelsQuery.data.value || {})
  })

  const getHotel = (id: number) => {
    return hotelsQuery.data.value?.[id]
  }

  return {
    getAllHotels,
    getHotel,
    isHotelListLoaded: hotelsQuery.isSuccess,
  }
}

function useHotelDataProvider(id: string) {
  const hotelQuery = useQuery({
    queryKey: ['hotel', id],
    queryFn: ({ queryKey: [, id] }) => {
      return getHotel(id)
    },
  })

  return {
    hotel: hotelQuery.data,
  }
}

export {
  useHotelDataProvider,
  useHotelsDataProvider,
}
