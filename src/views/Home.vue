<script setup>
import { useCounterStore } from "../stores/counter";
// import Header from "../components/Header.vue";
// const counterStore = useCounterStore();
</script>
<template>
  <h1>home</h1>
  <div class="flex gap-5">
    <router-link to="/about">About</router-link>
    <router-link to="/login">Login</router-link>
  </div>
</template>

<style lang=""></style>
