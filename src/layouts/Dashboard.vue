<script setup>
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <div class="flex h-full">
    <Sidebar></Sidebar>
    <div class="grow flex flex-col">
      <Header></Header>
      <div class="relative grow p-3 overflow-x-visible">
        <router-view></router-view>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<style lang=""></style>
