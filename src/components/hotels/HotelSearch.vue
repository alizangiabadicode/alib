<script setup lang="ts">
import TheSearchable from '../TheSearchable.vue'

const textSearch = ref('')
const txtSearchDebounced = refDebounced(textSearch, 500)
const { getAllHotels } = useHotelsDataProvider({
  enabled: true,
}, computed(() => {
  return {
    q: txtSearchDebounced.value,
  }
}))
const getSearchableOptions = computed(() => {
  return getAllHotels.value.map((hotel) => {
    return {
      id: hotel.id,
      name: hotel.name,
      desc: hotel.description,
    }
  })
})

const selectedHotel = ref()
</script>

<template>
  <div class="absolute top-10 w-full flex justify-center">
    <TheSearchable v-model="selectedHotel" v-model:search="textSearch" :options="getSearchableOptions" class="max-w-80">
      <template v-for="option in getSearchableOptions" :key="`option-${option.id}`" #[`option-${option.id}`]>
        <div class="font-bold">
          {{ option.name }}
        </div>
        <div class="font-light">
          {{ option.desc }}
        </div>
      </template>
    </TheSearchable>
  </div>
</template>
