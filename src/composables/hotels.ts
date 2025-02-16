import type { HotelSearchParams } from '~/models/hotels'
import { useQuery } from '@tanstack/vue-query'
import { getHotels } from '~/services/hotels'

function useHotelsDataProvider(options: {
  onSuccess?: () => void
  enabled?: boolean
}, filters: MaybeRef<HotelSearchParams> = {
  q: '',
}) {
  const { onSuccess, enabled } = options
  const hotelsQuery = useQuery({
    queryKey: computed(() => ['hotels', unref(filters)]),
    queryFn: ({ queryKey: [, filters] }) => {
      console.warn(filters)
      return getHotels(filters as HotelSearchParams)
    },
    enabled: !!enabled,
  })

  if (onSuccess) {
    const stop = watch(hotelsQuery.status, (status) => {
      if (status === 'success') {
        onSuccess()
        stop()
      }
    })
  }

  const getAllHotels = computed(() => {
    return hotelsQuery.data.value || []
  })

  return {
    getAllHotels,
    refetch: hotelsQuery.refetch.bind(hotelsQuery),
  }
}

export {
  useHotelsDataProvider,
}
