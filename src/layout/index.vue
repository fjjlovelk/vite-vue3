<template>
  <el-container class="home-container">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="260px">
        <Aside />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Aside from './aside/index.vue';
</script>

<style lang="scss" scoped>
.home-container {
  height: 100%;
}
</style>
