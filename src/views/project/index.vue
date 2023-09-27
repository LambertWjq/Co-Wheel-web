<script setup lang="ts">
import { ref } from 'vue'
import fileTable from '@/components/FileTable.vue';
import memberList, {type MemberProps } from './MemberList.vue'

const activeName = ref('file')

const testMemberData: MemberProps[] = [{
  id: 1,
  avatar: '',
  userName: 'UserName1',
  email: '10000000@qq.com',
  character: 'Owner',
},
  {
    id: 2,
    avatar: '',
    userName: 'UserName2',
    email: '11100000@qq.com',
    character: 'Manager',
  },
  {
    id: 3,
    avatar: '',
    userName: 'UserName3',
    email: '11133300@qq.com',
    character: 'member',
  }
]

</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/work' }">Project</el-breadcrumb-item>
    <el-breadcrumb-item>项目名称</el-breadcrumb-item>
  </el-breadcrumb>
  <el-tabs style="margin-top: 16px" v-model="activeName" class="demo-tabs">
    <el-tab-pane label="简介" name="introduction">
    </el-tab-pane>
    <el-tab-pane label="文件" name="file">
      <file-table></file-table>
    </el-tab-pane>
    <el-tab-pane label="成员" name="member">
      <memberList :list="testMemberData"></memberList>
    </el-tab-pane>
  </el-tabs>
  <el-button
      style="position: absolute; right: 18px;top: 100px"
      icon="CirclePlus"
  >
    添加
  </el-button>
</template>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
