<script setup lang="ts">
import type { IOptions } from '~/models/components/ُTheSearchable'
import TheSearchInput from './TheSearchInput.vue'

const textSearch = ref('')
const txtSearchDebounced = refDebounced(textSearch, 500)
const { getAllHotels, getHotel } = useHotelsDataProvider(computed(() => {
  return {
    q: txtSearchDebounced.value,
  }
}))
const { zoomTo } = useMap()
const getSearchableOptions = computed(() => {
  return getAllHotels.value.map((hotel) => {
    return {
      id: hotel.id,
      name: hotel.name,
      desc: hotel.description,
    }
  })
})

const selectedHotel = ref<IOptions | null>(null)
watch(selectedHotel, (h) => {
  if (h) {
    const hotel = getHotel(h.id)
    if (hotel) {
      zoomTo(hotel.id)
    }
  }
})
</script>

<template>
  <div class="absolute top-10 w-full flex justify-center">
    <TheSearchInput v-model="selectedHotel" v-model:search="textSearch" :options="getSearchableOptions" class="max-w-80">
      <template v-for="option in getSearchableOptions" :key="`option-${option.id}`" #[`option-${option.id}`]>
        <div class="font-bold">
          {{ option.name }}
        </div>
        <div class="font-light">
          {{ option.desc }}
        </div>
      </template>
    </TheSearchInput>
  </div>
</template>
