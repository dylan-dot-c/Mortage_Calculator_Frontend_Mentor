<script setup lang="ts">
import emptySvg from '../assets/images/illustration-empty.svg'
</script>

<template>
  <figure class="text-center py-8">
    <div class="flex justify-center"><img :src="emptySvg" alt="svg of a calculator" /></div>

    <figcaption class="text-slate-100 text-2xl mb-4">Results Shown Here</figcaption>
    <p class="text-slate-500">
      Complete the form and click “calculate repayments” to see what your monthly repayments would
      be.
    </p>
  </figure>
</template>
