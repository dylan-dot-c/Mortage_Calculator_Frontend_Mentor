<script setup lang="ts">
import MortgageResults from './components/MortgageResults.vue'
import EnhancedInput from './components/EnhancedInput.vue'
import NoResults from './components/NoResults.vue'
import calculator from './assets/images/icon-calculator.svg'
import { useMortageStore } from './stores/mortage'
import { ref, onMounted } from 'vue'

const data = useMortageStore()
const formRef = ref<HTMLFormElement | null>(null)

onMounted(() => {
  if (formRef.value) {
    formRef.value.reset()
  }
})
</script>

<template>
  <main
    class="flex flex-col gap-6 md:grid md:grid-cols-2 md:max-w-5xl md:bg-white md:rounded-[30px] overflow-hidden"
  >
    <section class="p-4 md:p-8">
      <form @submit.prevent="(data.submitted = true), data.calculateMortage()" ref="formRef">
        <header class="my-4 md:flex md:justify-between md:items-center">
          <h1 class="text-3xl text-slate-900 font-bold mb-2">Mortage Calculator</h1>
          <button class="underline text-slate-500" type="reset" @click="data.clearForm">
            Clear All
          </button>
        </header>
        <div class="space-y-8 mb-8">
          <EnhancedInput text="£" label="Mortage Amount" align="left" name="amount" :min="0" />
          <div class="md:grid md:grid-cols-2 md:gap-4 space-y-8 md:space-y-0">
            <EnhancedInput
              text="years"
              label="Mortage Term"
              align="right"
              name="duration"
              :min="0"
            />
            <EnhancedInput text="%" label="Interest Rate" align="right" name="interest" :min="0" />
          </div>
        </div>

        <div>
          <p class="text-slate-500">Mortage Type</p>
          <div class="*:rounded-xl space-y-2 *:space-x-4 mt-4 *:block mb-12">
            <label
              for="repayment"
              class="border p-4 pl-16 relative"
              :class="{ 'border-lime bg-lime bg-opacity-10': data.formInfo.type == 'repayment' }"
            >
              <input
                type="radio"
                name="type"
                value="repayment"
                id="repayment"
                class=""
                v-model="data.formInfo.type"
                required
              />
              <span class="radio"><span class="radio--circle"></span></span>
              Repayment
            </label>

            <label
              for="interest"
              class="border p-4 pl-16 mb-12 relative"
              :class="{ 'border-lime bg-lime bg-opacity-10': data.formInfo.type == 'interest' }"
            >
              <input
                type="radio"
                name="type"
                value="interest"
                id="interest"
                class=""
                v-model="data.formInfo.type"
                required
              />
              <span class="radio"><span class="radio--circle"></span></span>
              Interest
              <p class="error hidden text-red absolute top-16 left-0">This field is required</p>
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

    <section class="bg-slate-800 p-4 md:p-8 md:rounded-es-[60px]">
      <NoResults v-if="!data.submitted" />
      <MortgageResults v-else />
    </section>
  </main>
</template>
