<script setup lang="ts">
import {computed} from 'vue';
import {useMenuSidebarStore, useUserSidebarStore} from '@/store/sidebar';
import {useRoute} from 'vue-router';

const menuItems = [
  {
    icon: 'Odometer',
    index: '/',
    title: '首页',
    permiss: '1',
  },
  {
    icon: 'Calendar',
    index: '/work',
    title: '表格相关',
    permiss: '2',
  },
];

const userItems = [
  {
    icon: 'Odometer',
    index: '/',
    title: '用户状态',
    permiss: '1',
  },
  {
    icon: 'Calendar',
    index: '/work',
    title: '你的项目',
    permiss: '2',
  },
];

const route = useRoute();
const onRoutes = computed(() => {
  return route.path;
})

const menuSidebar = useMenuSidebarStore();
const userSidebar = useUserSidebarStore();
</script>

<template>
  <div class="sidebar">
    <el-drawer
        v-model="menuSidebar.collapse"
        direction="ltr"
        :append-to-body=true
        :destroy-on-close=false
        :show-close=false
        top="0"
        class="left-sidebar"
    >
      <template #header="{ close }">
        <div>
          <img class="sidebar-logo" src="../assets/logo.png"/>
        </div>
        <el-button @click="close">
          <el-icon>
            <Close/>
          </el-icon>
        </el-button>
      </template>
      <el-menu
          class="sidebar-el-menu"
          :default-active="onRoutes"
          unique-opened
          router
      >
        <template v-for="item in menuItems" :key="item.index">
          <el-menu-item :index="item.index" v-premiss="item.permiss">
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </el-menu>
    </el-drawer>
    <el-drawer
        v-model="userSidebar.collapse"
        direction="rtl"
        :append-to-body=true
        :destroy-on-close=false
        :show-close=false
        top="0"
        class="right-sidebar"
    >
      <template #header="{ close }">
        <div>
          <img class="sidebar-logo" src="../assets/logo.png"/>
        </div>
        <el-button @click="close">
          <el-icon>
            <Close/>
          </el-icon>
        </el-button>
      </template>
      <el-menu
          class="sidebar-el-menu"
          :default-active="onRoutes"
          unique-opened
          router
      >
        <template v-for="item in userItems" :key="item.index">
          <el-menu-item :index="item.index" v-premiss="item.permiss">
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </el-menu>
    </el-drawer>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  display: block;
  position: fixed;
  left: 0;
  top: 50px;
  bottom: 0;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
  border-right: none;
  .el-menu-item {
   padding: 0;
   height: 30px;
  }
}

.sidebar > ul {
  height: 100%;
}
</style>

<style lang="scss">
.el-overlay:has(.left-sidebar, .right-sidebar) {
  background-color: #FFFFFF00;
}

.left-sidebar, .right-sidebar {
  .el-drawer__header {
    background-color: #ffffff;
    margin: 0;
    .el-button {
      border: none;
    }
  }
  .el-drawer__body {
    padding-top: 10px;
  }
  .sidebar-logo {
    width: 40px;
    height: 40px;
  }
  .sidebar-el-menu {
    padding: 0;
    margin: 0;
  }
}

.left-sidebar.el-drawer.ltr, .right-sidebar.el-drawer.rtl {
  max-width: 290px;
  min-width: 290px;
}
</style>