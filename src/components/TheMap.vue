<script setup lang="ts">
import { useMap } from '~/composables/map'

interface IProps {
  markers: {
    id: number
    title: string
    lat: number
    lng: number
  }[]
}
const props = defineProps<IProps>()
const emits = defineEmits(['markerClicked'])

const { initialize, setMarker } = useMap()

onMounted(() => {
  initialize()
  props.markers.forEach((marker) => {
    setMarker({
      id: marker.id,
      lat: marker.lat,
      lng: marker.lng,
      title: marker.title,
    }, (id: number) => {
      emits('markerClicked', id)
    })
  })
})
</script>

<template>
  <div id="mapCanvas" class="isolate h-screen" />
</template>
