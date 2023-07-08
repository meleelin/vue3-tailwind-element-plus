<template>
  <div class="w-52 h-full shrink-0 overflow-y-auto custom-scrollbar">
    <el-menu default-active="2" class="el-menu-vertical-demo h-full" background-color="#FFEDD5" @open="handleOpen" @close="handleClose">
      <div class="flex items-center justify-center h-16 p-3">
        <router-link :to="{ name: 'Index' }">Home</router-link>
      </div>
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Location /></el-icon> <span>財務管理 </span>
        </template>
        <router-link :to="{ name: 'About' }"> <el-menu-item index="1-1">提現審核</el-menu-item></router-link>
        <router-link :to="{ name: 'Test' }"><el-menu-item index="1-2">用戶提現列表</el-menu-item></router-link>
        <router-link :to="{ name: 'Test' }"><el-menu-item index="1-3">充值列表</el-menu-item></router-link>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><IconMenu /></el-icon> <span>投放管理</span>
        </template>
        <router-link :to="{ name: 'About' }"> <el-menu-item index="2-1">渠道管理</el-menu-item></router-link>
        <router-link :to="{ name: 'Test' }"><el-menu-item index="2-2">項目成本</el-menu-item></router-link>
        <router-link :to="{ name: 'Test' }"><el-menu-item index="2-3">投放回收數據</el-menu-item></router-link>
        <router-link :to="{ name: 'Test' }"><el-menu-item index="2-4">全渠道回收數據統計</el-menu-item></router-link>
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
<style scoped lang="sass">
.custom-scrollbar
  &::-webkit-scrollbar
    width: 7px

  &::-webkit-scrollbar-button
    background: transparent
    border-radius: 4px

  &::-webkit-scrollbar-track-piece
    background: transparent

  &::-webkit-scrollbar-thumb
    border-radius: 4px
    background-color: rgba(0, 0, 0, 0.1)
    border: 1px solid slategrey

  &::-webkit-scrollbar-track
    box-shadow: transparent
</style>
