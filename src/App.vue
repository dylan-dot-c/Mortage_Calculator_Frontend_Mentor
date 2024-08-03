<script setup lang="ts">
import EnhancedInput from './components/EnhancedInput.vue'
import NoResults from './components/NoResults.vue'
import calculator from './assets/images/icon-calculator.svg'
import { useMortageStore } from './stores/mortage'

const data = useMortageStore()
</script>

<template>
  <main class="flex flex-col gap-6">
    <section class="p-4">
      <header class="my-4">
        <h1 class="text-3xl text-slate-900 font-bold mb-2">Mortage Calculator</h1>
        <button class="underline text-slate-500">Clear All</button>
      </header>

      <form @submit.prevent>
        <div class="space-y-4">
          <EnhancedInput text="£" label="Mortage Amount" align="left" name="amount" />
          <EnhancedInput text="years" label="Mortage Term" align="right" name="duration" />
          <EnhancedInput text="%" label="Interest Rate" align="right" name="interest" />
        </div>

        <div>
          <p>Mortage Type</p>
          <div class="*:rounded-xl space-y-2 *:space-x-4 mt-4 *:block">
            <label
              for="repayment"
              class="border p-4 pl-12 relative"
              :class="{ 'border-lime': data.formInfo.type == 'repayment' }"
            >
              <input
                type="radio"
                name="type"
                value="repayment"
                id="repayment"
                class=""
                v-model="data.formInfo.type"
              />
              <span class="radio"><span class="radio--circle"></span></span>
              Repayment
            </label>

            <label
              for="interest"
              class="border p-4 pl-12 relative"
              :class="{ 'border-lime': data.formInfo.type == 'interest' }"
            >
              <input
                type="radio"
                name="type"
                value="interest"
                id="interest"
                class=""
                v-model="data.formInfo.type"
              />
              <span class="radio"><span class="radio--circle"></span></span>
              Interest
            </label>
          </div>
        </div>

        <button
          type="submit"
          class="flex gap-2 justify-center bg-lime rounded-full p-4 w-full mt-4"
        >
          <img src="" alt="" /><span><img :src="calculator" alt="" /></span>Calculate Repayments
        </button>
      </form>
    </section>

    <section class="bg-slate-900 p-4">
      <NoResults />
    </section>
  </main>
</template>
