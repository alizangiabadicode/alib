<script setup lang="ts">
import TheSearch from '~/components/TheSearch.vue'
import { useHotelsDataProvider } from '~/composables/hotels'

const { getAllHotels, isHotelListLoaded } = useHotelsDataProvider()

const getConvertedHotelsToMarkers = computed(() => {
  return getAllHotels.value.map((hotel) => {
    return {
      id: hotel.id,
      title: hotel.name,
      lat: hotel.location.lat,
      lng: hotel.location.long,
    }
  })
})

const router = useRouter()
function onClickMarker(id: number) {
  router.push({
    path: `/hotels/${id.toString()}`,
  })
}
</script>

<template>
  <TheMap v-if="isHotelListLoaded" :markers="getConvertedHotelsToMarkers" @marker-clicked="onClickMarker" />
  <TheSearch />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
