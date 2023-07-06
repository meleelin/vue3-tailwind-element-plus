<script setup>
import { useCounterStore } from "../stores/counter";
import { userTest } from "../api/user";
const counterStore = useCounterStore();
userTest().then((res) => console.log(res));
</script>
<template>
  <h1>home</h1>
  <div class="flex gap-5">
    <router-link to="/about" class="text-sky-600 underline">About</router-link>
    <router-link to="/login" class="text-sky-600 underline">Login</router-link>
    <p>store: {{ counterStore.counter }}</p>
  </div>
</template>

<style lang=""></style>
