<script setup lang="ts">
import { useHotelDataProvider } from '~/composables/hotels'

const route = useRoute('/hotels/[id]')
const { hotel } = useHotelDataProvider(route.params.id)
</script>

<template>
  <template v-if="hotel">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl font-bold">
        {{ hotel.name }}
      </h1>
      <p class="text-lg">
        {{ hotel.description }}
      </p>
      <p>
        {{ hotel.location.lat }}, {{ hotel.location.long }}
      </p>
      <p>
        stars:
        {{ hotel.stars }}
      </p>
    </div>
  </template>
</template>
