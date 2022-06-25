import { defineStore } from 'pinia';
import { login, getInfo, getMenu } from '@/api/user';

const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: sessionStorage.getItem('token') || '',
      userInfo: {},
      menuList: []
    };
  },
  getters: {},
  actions: {
    // 设置token
    setToken(val) {
      sessionStorage.setItem('token', val);
      this.token = val;
    },

    // 设置userInfo
    setUserInfo(val) {
      this.userInfo = val;
    },

    // 设置menuList
    setMenuList(val) {
      this.menuList = val;
    },

    // 登录
    async login(loginForm) {
      try {
        const res = await login(loginForm);
        this.setToken(res.data.token);
      } catch (error) {
        return error;
      }
    },

    // 获取用户信息
    async getUserInfo() {
      try {
        const res = await getInfo();
        this.setUserInfo(res.data);
      } catch (error) {
        return error;
      }
    },

    // 获取用户信息
    async getMenuList() {
      try {
        const res = await getMenu();
        this.setMenuList(res.data.menuList);
      } catch (error) {
        return error;
      }
    }
  }
});

export default useUserStore;
