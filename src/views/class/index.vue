<script setup lang="ts">
import {onMounted, ref} from 'vue'
import fileTable from '@/components/FileTable.vue';
import {myClassStore} from "@/store/classes";
import {useRoute} from "vue-router";
import TaskCard from "@/components/card/TaskCard.vue";
import {classTaskStore} from "@/store/task";
// import memberList, {type MemberProps } from './MemberList.vue'

const activeName = ref('introduction')
const myClassList = myClassStore()
const classTaskList = classTaskStore()
let { query } = useRoute()
const myClass = myClassList.classesList.find(item => {
  return item.id === Number(query.id);
})
const taskList = classTaskList.taskList.find(item => {
  return item.classId === Number(query.id);
})
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/school' }">我的班级</el-breadcrumb-item>
    <el-breadcrumb-item>{{myClass.title}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{'班级人数：' + myClass.member}}</el-breadcrumb-item>
  </el-breadcrumb>
  <el-tabs style="margin-top: 16px" v-model="activeName" class="demo-tabs">
    <el-tab-pane label="简介" name="introduction">
      {{myClass.info}}
    </el-tab-pane>
    <el-tab-pane label="任务" name="task">
      <task-card></task-card>
    </el-tab-pane>
    <el-tab-pane label="文件" name="file">
      <file-table></file-table>
    </el-tab-pane>
    <el-tab-pane label="成员" name="member">
      <memberList :list="testMemberData"></memberList>
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
