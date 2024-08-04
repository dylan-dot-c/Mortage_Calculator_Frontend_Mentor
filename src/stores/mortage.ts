import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export interface Mortage {
  amount: number
  duration: number
  interest: number
  type: string
}
export const useMortageStore = defineStore('mortage', () => {
  const formInfo = ref<Mortage>({ amount: 0, duration: 0, interest: 0, type: '' })
  const formErrors = ref({ amount: '', duration: '', interest: '', type: '' })
  const submitted = ref(false)
  const mortgageValues = reactive({ monthlyPayment: 0, totalPayment: 0 })

  const calculateMortage = () => {
    submitted.value = true
    const { amount, duration, interest, type } = formInfo.value
    const monthlyRate = interest / 100 / 12

    const num_payments = duration * 12

    const monthlyPayment =
      (amount * (monthlyRate * Math.pow(1 + monthlyRate, num_payments))) /
      (Math.pow(1 + monthlyRate, num_payments) - 1)

    const totalPayment = monthlyPayment * num_payments

    console.log('Calculating...')
    mortgageValues.monthlyPayment = monthlyPayment
    mortgageValues.totalPayment = totalPayment
    return {
      totalPayment,
      monthlyPayment
    }
  }

  const clearForm = () => {
    submitted.value = false
    formInfo.value.type = ''
  }
  return { formInfo, formErrors, calculateMortage, submitted, mortgageValues, clearForm }
})
