<script setup lang="ts">
import { useMortageStore } from '../stores/mortage'
import type { Mortage } from '../stores/mortage'
defineProps<{
  label: string
  text: string
  align: 'left' | 'right'
  name: keyof Mortage
  min: number
  id: string
}>()

const { formInfo, formErrors } = useMortageStore()
</script>

<template>
  <div class="">
    <label :for="id" class="text-slate-500">{{ label }}</label>
    <div class="relative mt-2">
      <input
        :id
        :min
        step="0.01"
        :name
        v-model="formInfo[name]"
        type="number"
        class="w-full p-4 rounded-md border-2 font-bold outline-none focus:border-lime peer cursor-pointer hover:border-slate-500"
        :class="{
          'pl-16': align == 'left',
          'pr-16': align == 'right',
          'border-red': formErrors[name] != '',
          'border-slate-300': formErrors[name] == ''
        }"
      />

      <span
        class="py-4 px-5 h-[calc(100%-4px)] font-bold transition absolute top-1/2 -translate-y-1/2 peer-focus:bg-lime peer-focus:text-slate-900"
        :class="{
          'left-[1px] rounded-l-md': align == 'left',
          'right-[1px] rounded-r-md': align == 'right',
          'bg-red text-white': formErrors[name] != '',
          'bg-slate-100 text-slate-500': formErrors[name] == ''
        }"
        >{{ text }}</span
      >
    </div>
    <p class="text-red" :class="{ block: formErrors[name] != '', hidden: formErrors[name] == '' }">
      This field is required
    </p>
  </div>
</template>
