<script setup lang="ts">
import { useMortageStore } from '@/stores/mortage'

const { mortgageValues } = useMortageStore()
</script>

<template>
  <article class="pb-8">
    <div class="space-y-4 my-4">
      <h2 class="text-slate-100 text-2xl font-bold">Your Results</h2>
      <p class="text-slate-500">
        Your results are shown below based on the information you provided. To adjust the results,
        edit the form and click “calculate repayments” again.
      </p>
    </div>
    <div class="bg-slate-900 border-t-4 rounded-xl p-4 border-t-lime">
      <div class="">
        <p class="text-slate-300">Your monthly repayments</p>
        <p class="text-lime text-4xl font-medium mt-2">
          {{
            Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(
              mortgageValues.monthlyPayment
            )
          }}
        </p>
      </div>

      <hr class="w-full my-4 border-t-[0.5px] border-slate-700" />
      <div class="mt-4">
        <p class="text-slate-300">Total you'll pay over the term.</p>
        <p class="text-slate-100 mt-2 text-2xl">
          {{
            Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(
              mortgageValues.totalPayment
            )
          }}
        </p>
      </div>
    </div>
  </article>
</template>
