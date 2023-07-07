<script setup></script>
<template>
  <div class="flex items-center shrink-0 px-3 gap-3 h-16 shadow">
    <router-link :to="{ name: 'About' }" class="text-sky-600 underline">About</router-link>
    <router-link :to="{ name: 'Login' }" class="text-sky-600 underline">Login</router-link>
    <router-link :to="{ name: 'Test' }" class="text-sky-600 underline">Test</router-link>
  </div>
</template>
<style></style>
