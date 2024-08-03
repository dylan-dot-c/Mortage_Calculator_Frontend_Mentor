import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface Mortage {
  amount: Number
  duration: Number
  interest: Number
  type: string
}
export const useMortageStore = defineStore('mortage', () => {
  const formInfo = ref<Mortage>({ amount: 0, duration: 0, interest: 0, type: '' })
  const formErrors = ref({ amount: '', duration: '', interest: '', type: '' })

  return { formInfo, formErrors }
})
