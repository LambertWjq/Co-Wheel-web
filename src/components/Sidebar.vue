<script setup lang="ts">
import { computed } from 'vue';
import { useSidebarStore } from '@/store/sidebar';
import { useRoute } from 'vue-router';

const items = [
  {
    icon: 'Odometer',
    index: '/',
    title: '首页',
    permiss: '1',
  },
  {
    icon: 'Calendar',
    index: '1',
    title: '表格相关',
    permiss: '2',
    subs: [
      {
        index: '/table',
        title: '常用表格',
        permiss: '2',
      }
    ]
  },
];

const route = useRoute();
const onRoutes = computed(() => {
  return route.path;
})

const sidebar = useSidebarStore();
</script>

<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="sidebar.collapse"
      unique-opened
      router
      >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index" v-permiss="item.permiss">
            <template #title>
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index" v-premiss="item.permiss">
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
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
}
.sidebar > ul {
  height: 100%;
}
</style>