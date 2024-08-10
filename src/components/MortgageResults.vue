<script setup lang="ts">
import { useMortageStore } from '@/stores/mortage'

const { mortgageValues } = useMortageStore()

const formatNumber = (number: number) => {
  // GBP === Great Britain Pound
  return Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(number)
}
</script>

<template>
  <article class="pb-8 md:pb-0">
    <div class="space-y-4 my-4 md:space-y-5 md:my-5">
      <h2 class="text-slate-100 text-2xl font-bold">Your Results</h2>
      <p class="text-slate-500">
        Your results are shown below based on the information you provided. To adjust the results,
        edit the form and click “calculate repayments” again.
      </p>
    </div>
    <div class="bg-slate-900 border-t-4 rounded-xl p-4 md:p-8 border-t-lime">
      <div>
        <p class="text-slate-500">Your monthly repayments</p>
        <p class="text-lime text-4xl md:text-6xl font-medium mt-2 md:mt-4">
          {{ formatNumber(mortgageValues.monthlyPayment) }}
        </p>
      </div>

      <hr class="w-full my-4 md:my-8 border-t-[0.5px] border-slate-700" />
      <div class="mt-4">
        <p class="text-slate-500">Total you'll pay over the term.</p>
        <p class="text-slate-100 mt-2 md:mt-4 text-2xl">
          {{ formatNumber(mortgageValues.totalPayment) }}
        </p>
      </div>
    </div>
  </article>
</template>
