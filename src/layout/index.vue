<template>
  <el-container class="home-container">
    <el-header>
      <BaseHeader />
    </el-header>
    <el-container>
      <el-aside width="260px">
        <BaseAside />
      </el-aside>
      <el-main>
        <router-view v-slot="{ Component }" class="router-view">
          <keep-alive>
            <transition mode="out-in">
              <component :is="Component" />
            </transition>
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import BaseAside from './aside/index.vue';
import BaseHeader from './header/index.vue';

import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<style lang="scss" scoped>
.home-container {
  height: 100%;
  .el-header {
    padding: 0;
    background-color: var(--el-color-primary);
  }
  .el-aside {
    padding: 0 10px;
  }
  .el-main {
    background-color: var(--el-bg-color-page);
    padding: 10px;
  }
  .router-view {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 10px;
    background-color: var(--el-bg-color);
  }
}
</style>
