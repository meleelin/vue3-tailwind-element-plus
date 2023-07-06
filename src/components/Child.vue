<template lang="">
  <h2 @click="$emit('childClick')">Child:</h2>
  <span>{{counter}}</span>
</template>
<script setup>

const emit = defineEmits(["childClick"])

const props = defineProps({
  counter:Number,
})

// const changeProps = ()=>{
//   emit('childClick')
// }
</script>
<style lang="">
  
</style>