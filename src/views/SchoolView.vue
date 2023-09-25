<script setup lang="ts">
import {ref} from 'vue'
import type { TabsPaneContext } from 'element-plus';
import ClassesCard from "@/components/card/ClassesCard.vue";
import {myClassStore} from "@/store/classes";

const activeName = ref('myClass')
const myClassList = myClassStore()
// const myManageClassList = myManageClassStore()
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="我所在的班级" name="myClass">
      <ClassesCard :classes-list="myClassList.classesList"></ClassesCard>
    </el-tab-pane>
<!--    <el-tab-pane label="我管理的班级" name="myManageClass">-->
<!--      <ClassesCard :classes-list="myManageClassList.myManageClassesList"></ClassesCard>-->
<!--    </el-tab-pane>-->
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
