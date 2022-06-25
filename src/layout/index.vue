<template>
  <el-container class="home-container">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup></script>

<style lang="scss" scoped>
.home-container {
  height: 100%;
}
</style>
