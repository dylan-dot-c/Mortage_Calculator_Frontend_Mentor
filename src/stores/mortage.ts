import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export interface Mortage {
  amount: number
  duration: number
  interest: number
  type: 'interest' | 'repayment' | ''
}
export const useMortageStore = defineStore('mortage', () => {
  const formInfo = ref<Mortage>({ amount: 0, duration: 0, interest: 0, type: '' })
  const formErrors = ref({ amount: '', duration: '', interest: '', type: '' })
  const submitted = ref(false)
  const mortgageValues = reactive({ monthlyPayment: 0, totalPayment: 0 })

  const calculateMortage = () => {
    const { amount, duration, interest, type } = formInfo.value
    const monthlyRate = interest / 100 / 12

    const num_payments = duration * 12
    let monthlyPayment = 0,
      totalPayment = 0

    if (type == 'repayment') {
      monthlyPayment =
        (amount * (monthlyRate * Math.pow(1 + monthlyRate, num_payments))) /
        (Math.pow(1 + monthlyRate, num_payments) - 1)

      totalPayment = monthlyPayment * num_payments
    } else if (type == 'interest') {
      monthlyPayment = monthlyRate * amount
      totalPayment = monthlyPayment * num_payments + amount
    }

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
