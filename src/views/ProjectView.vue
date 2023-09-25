<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref('project')

</script>

<template>
  <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="项目" name="project">
    </el-tab-pane>
    <el-tab-pane label="文件" name="file">
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
