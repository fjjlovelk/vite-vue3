<template>
  <el-button type="primary" @click="handleLogin">登录</el-button>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useUserStore from '@/store/user';
const router = useRouter();
const userStore = useUserStore();

const handleLogin = async () => {
  await userStore.login({});
  router.replace('/');
};
</script>

<style lang="scss" scoped></style>
