<script setup lang="ts">
import { useMortageStore } from '../stores/mortage'
import type { Mortage } from '../stores/mortage'
defineProps<{ label: string; text: string; align: 'left' | 'right'; name: keyof Mortage }>()

const { formInfo } = useMortageStore()
</script>

<template>
  <div class="">
    <label for="" class="mb-6 text-slate-500">{{ label }}</label>
    <div class="relative overflow-hidden mt-2">
      <input
        :name
        v-model="formInfo[name]"
        type="number"
        class="w-full p-4 rounded-xl border border-slate-500 font-bold peer"
        :class="{ 'pl-16': align == 'left', 'pr-16': align == 'right' }"
        required
      />

      <span
        class="bg-slate-100 text-slate-500 py-4 px-5 h-[calc(100%-4px)] font-bold peer-focus:bg-slate-300 transition absolute top-1/2 -translate-y-1/2"
        :class="{
          'left-[1px]': align == 'left',
          'right-[1px]': align == 'right',
          'rounded-r-xl': align == 'right',
          'rounded-l-xl': align == 'left'
        }"
        >{{ text }}</span
      >
    </div>
    <p>Name</p>
  </div>
</template>
