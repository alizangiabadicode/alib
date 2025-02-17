<script setup lang="ts">
import type { IProps } from '~/models/components/ُTheSearchable'
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'

defineProps<IProps>()
const searchModel = defineModel('search', {
  default: '',
})
</script>

<template>
  <Listbox as="div" class="relative w-full" v-bind="$attrs">
    <ListboxButton
      class="w-full border border-gray-300 rounded-lg bg-white px-4 py-2 text-left text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {{ modelValue?.name || 'please select an item' }}
    </ListboxButton>
    <ListboxOptions
      class="absolute z-10 mt-1 max-h-60 w-full overflow-auto border border-gray-300 rounded-lg bg-white shadow-lg focus:outline-none"
    >
      <ListboxOption
        key="search"
        class="py-5"
        :disabled="true"
      >
        <div>
          <TheInput v-model="searchModel" class="text-gray-800" />
        </div>
      </ListboxOption>
      <ListboxOption
        v-for="option in options"
        :key="option.id"
        :value="option"
        class="cursor-pointer px-4 py-2 text-gray-800 disabled:cursor-not-allowed hover:bg-gray-100 disabled:text-gray-400"
      >
        <slot :name="`option-${option.id}`">
          {{ option.name }}
        </slot>
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
</template>
