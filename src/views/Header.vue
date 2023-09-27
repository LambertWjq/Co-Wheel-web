<script setup lang="ts">
import {useMenuSidebarStore, useUserSidebarStore} from "@/store/sidebar";
import { ref } from 'vue';
import {Expand, Search} from "@element-plus/icons-vue";


const headerSearchInput = ref('');
const menuSidebar = useMenuSidebarStore();
const userSidebar = useUserSidebarStore();
// 菜单侧边栏折叠
const menuCollapseChange = () => {
  menuSidebar.handleCollapse();
}
// 用户侧边栏折叠
const userCollapseChange = () => {
  userSidebar.handleCollapse();
}
</script>

<template>
  <div class="wheel-header-div">
    <div class="header-left">
      <!-- 折叠按钮 -->
      <div class="collapse-btn" @click="menuCollapseChange">
        <el-icon v-if="menuSidebar.collapse">
          <Expand />
        </el-icon>
        <el-icon v-else>
          <Fold />
        </el-icon>
      </div>
      <div>
        <a href="">
          <img class="logo" src="../assets/logo.png"/>
        </a>
      </div>
      <p>Wheel</p>
    </div>
    <div class="header-right">
      <div class="header-search">
        <el-input v-model="headerSearchInput" class="search-input" placeholder="Please input">
          <template #prefix>
            <el-icon class="el-icon__icon">
              <Search />
            </el-icon>
          </template>
        </el-input>
      </div>
      <div class="top-button">
        <el-button icon="Comment" circle>
        </el-button>
        <el-button type="primary" icon="Avatar" circle @click="userCollapseChange">
        </el-button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.top-button {
  margin-left: 12px;
  margin-right: 12px;
}

.wheel-header-div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
}
.header-left {
  display: flex;
  align-items: center;
  .collapse-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    float: left;
    padding: 0 21px;
    cursor: pointer;
  }
  .logo {
    width: 40px;
    height: 40px;
  }
}
.header-right {
  display: flex;
  align-items: center;
  div {
    display: flex;
    justify-content: space-evenly;
    min-width: 100px;
    min-height: 20px;
    margin:5px;
    background-color: #bad1e5;
  }
  .header-search {
    margin-right: 4px;
    background: none;
    .search-input {
      height: 30px;
      background: none;
    }
  }
}
</style>