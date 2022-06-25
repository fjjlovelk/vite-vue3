import router from './index';
import constantRoutes from './constant-routes';
import useUserStore from '@/store/user';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

const whiteList = ['/login'];

function hasPermission(path, menuList) {
  return menuList.some(item => {
    if (item.path === path) {
      return true;
    } else if (item.children && item.children.length) {
      return hasPermission(path, item.children);
    }
  });
}

router.beforeEach(async (to, from, next) => {
  nProgress.start();
  const userStore = useUserStore();
  if (whiteList.includes(to.path)) {
    next();
  } else {
    if (userStore.token) {
      try {
        if (!userStore.menuList || !userStore.menuList.length) {
          await userStore.getUserInfo();
          await userStore.getMenuList();
        }
        const hasP = hasPermission(to.path, [
          ...userStore.menuList,
          ...constantRoutes
        ]);
        if (hasP) {
          next();
        } else {
          next(`/404`);
        }
      } catch (error) {
        next(`/login`);
      }
    } else {
      next(`/login`);
    }
  }
});

router.afterEach(() => {
  nProgress.done();
});
