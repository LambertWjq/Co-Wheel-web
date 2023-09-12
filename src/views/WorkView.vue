<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import WorkProjectCard, {type WorkProjectProps} from "@/components/card/WorkProjectCard.vue";

const activeName = ref('project')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="项目" name="project">
      <WorkProjectCard list=""></WorkProjectCard>
    </el-tab-pane>
    <el-tab-pane label="文件" name="file">File</el-tab-pane>
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
