<template>
  <div class="w-52 h-full shrink-0 overflow-y-auto">
    <el-menu default-active="2" class="el-menu-vertical-demo h-full" background-color="#FFEDD5" @open="handleOpen" @close="handleClose">
      <div class="flex items-center justify-center h-16 p-3">
        <router-link :to="{ name: 'Index' }">Home</router-link>
      </div>
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Location /></el-icon> <span>Menu 1 </span>
        </template>
        <router-link :to="{ name: 'About' }"> <el-menu-item index="1-1"> About</el-menu-item></router-link>
        <router-link :to="{ name: 'Test' }"><el-menu-item index="1-2"> Test</el-menu-item></router-link>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><IconMenu /></el-icon> <span>Menu 2 </span>
        </template>
        <router-link :to="{ name: 'About' }"> <el-menu-item index="1-1"> About</el-menu-item></router-link>
        <router-link :to="{ name: 'Test' }"><el-menu-item index="1-2"> Test</el-menu-item></router-link>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><IconMenu /></el-icon> <span>Menu 2 </span>
        </template>
        <router-link :to="{ name: 'About' }"> <el-menu-item index="1-1"> About</el-menu-item></router-link>
        <router-link :to="{ name: 'Test' }"><el-menu-item index="1-2"> Test</el-menu-item></router-link>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><IconMenu /></el-icon> <span>Menu 2 </span>
        </template>
        <router-link :to="{ name: 'About' }"> <el-menu-item index="1-1"> About</el-menu-item></router-link>
        <router-link :to="{ name: 'Test' }"><el-menu-item index="1-2"> Test</el-menu-item></router-link>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><IconMenu /></el-icon> <span>Menu 2 </span>
        </template>
        <router-link :to="{ name: 'About' }"> <el-menu-item index="1-1"> About</el-menu-item></router-link>
        <router-link :to="{ name: 'Test' }"><el-menu-item index="1-2"> Test</el-menu-item></router-link>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><IconMenu /></el-icon> <span>Menu 2 </span>
        </template>
        <router-link :to="{ name: 'About' }"> <el-menu-item index="1-1"> About</el-menu-item></router-link>
        <router-link :to="{ name: 'Test' }"><el-menu-item index="1-2"> Test</el-menu-item></router-link>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><IconMenu /></el-icon> <span>Menu 2 </span>
        </template>
        <router-link :to="{ name: 'About' }"> <el-menu-item index="1-1"> About</el-menu-item></router-link>
        <router-link :to="{ name: 'Test' }"><el-menu-item index="1-2"> Test</el-menu-item></router-link>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
