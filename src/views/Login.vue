<script setup>
import { ref } from "vue";
const input = ref("");
</script>
<template>
  <div class="w-full h-full flex items-center justify-center bg-gray-400/50">
    <div class="max-w-screen-sm min-w-[30%] max-h-[80%] p-3 rounded-md bg-white">
      <form action="">
        <h1>Login</h1>
        <div class="flex gap-3">
          <label for="">name:</label>
          <el-input v-model="input" placeholder="Please input" />
        </div>
      </form>
    </div>
  </div>
  <!-- <h1>login</h1>
  <div class="flex gap-5">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div> -->
</template>

<style></style>
