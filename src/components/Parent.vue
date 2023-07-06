<template lang="">
  <h2 @click="controlChild">Parent:</h2>
  <span>{{counter}}</span>
  <Child v-if="isShow" :counter="counter" @childClick="onChildClick"/>
</template>
<script setup>
import Child from './Child.vue';
import { ref } from 'vue';

const counter = ref(0)
const isShow=ref(true)
function onChildClick(){
  counter.value++
}
function controlChild(){
  isShow.value = !isShow.value
}

</script>
<style lang="">
  
</style>