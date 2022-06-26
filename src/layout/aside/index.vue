<template>
  <el-menu
    router
    unique-opened
    @select="handleSelect"
    :default-active="route.path"
  >
    <template v-for="item in userStore.menuList" :key="item.path">
      <el-menu-item
        v-if="!item.children || !item.children.length"
        :index="item.path"
      >
        <i :class="item.icon"></i>
        <span>{{ item.name }}</span>
      </el-menu-item>
      <el-sub-menu v-else :index="item.path">
        <template #title>
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item v-for="child in item.children" :index="child.path">
          <i :class="child.icon"></i>
          <span>{{ child.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup>
import { useRoute } from 'vue-router';
import useUserStore from '@/store/user';
const route = useRoute();
const userStore = useUserStore();

const handleSelect = index => {
  console.log(index);
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: calc(100vh - 60px);
  overflow: auto;
  .el-menu-item.is-active {
    color: var(--el-color-white);
    background-color: var(--el-color-primary);
  }
  i {
    margin-right: 14px;
  }
}
</style>
