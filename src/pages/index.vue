<script setup lang="ts">
import TheSearchable from '~/components/TheSearchable.vue'
import { useHotelsDataProvider } from '~/composables/hotels'
import { useMap } from '~/composables/map'

const { initialize, setMarker } = useMap()

const { getAllHotels, refetch } = useHotelsDataProvider({
  onSuccess,
})

function onSuccess() {
  getAllHotels.value.forEach((hotel) => {
    setMarker({
      id: hotel.id,
      lat: hotel.location.lat,
      lng: hotel.location.long,
      title: hotel.name,
    }, () => {})
  })
}
onMounted(() => {
  initialize()
  refetch()
})
</script>

<template>
  <div id="mapCanvas" class="isolate h-screen" />
  <HotelSearch />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
