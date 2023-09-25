<script setup lang="ts">
import Header from "@/views/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
  <el-config-provider>
    <div class="common-layout">
      <el-container class="container">
        <el-header>
          <Header />
        </el-header>
        <el-container>
          <el-aside width="0px">
            <Sidebar />
          </el-aside>
          <el-main class="background">
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </el-config-provider>

</template>

<style scoped lang="scss">
.el-header {
  padding: 0;
  height: 50px;
}

.container {
  height: 100vh;
}

.background {
  background-color: #F7F8FA;
}
</style>