<script setup lang="ts">
import { useMortageStore } from '../stores/mortage'
import type { Mortage } from '../stores/mortage'
defineProps<{
  label: string
  text: string
  align: 'left' | 'right'
  name: keyof Mortage
  min: number
}>()

const { formInfo } = useMortageStore()
</script>

<template>
  <div class="">
    <label for="" class="mb-6 text-slate-500">{{ label }}</label>
    <div class="relative mt-2">
      <input
        :min
        step="0.01"
        :name
        v-model="formInfo[name]"
        type="number"
        class="w-full p-4 rounded-md border-2 border-slate-300 font-bold outline-none focus:border-slate-900"
        :class="{ 'pl-16': align == 'left', 'pr-16': align == 'right' }"
        required
      />

      <span
        class="bg-slate-100 text-slate-500 py-4 px-5 h-[calc(100%-4px)] font-bold transition absolute top-1/2 -translate-y-1/2"
        :class="{
          'left-[1px]': align == 'left',
          'right-[1px]': align == 'right',
          'rounded-r-md': align == 'right',
          'rounded-l-md': align == 'left'
        }"
        >{{ text }}</span
      >
      <p class="error absolute top-16 hidden text-red">This field is required</p>
    </div>
  </div>
</template>
