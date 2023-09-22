<template>
  <el-table
      ref="multipleTableRef"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column property="name" label="文件名" width="120">
      <template #default="scope">{{ scope.row.name }}</template>
    </el-table-column>
    <el-table-column property="partNum" label="文件编号" width="120" />
    <el-table-column property="projectNum" label="项目编号" width="120" />
    <el-table-column property="status" label="状态" show-overflow-tooltip />
    <el-table-column property="revisionNumber" label="修订号" width="120" />
    <el-table-column property="versionNumber" label="版本号" width="120" />
    <el-table-column property="description" label="描述" width="360" />
  </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElTable } from 'element-plus'

interface User {
  date: string
  name: string
  address: string
}

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])

const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

const tableData: User[] = [
  {
    name: '文件名称',
    partNum: '1',
    status: 'In Progress',
    projectNum: '1',
    revisionNumber: '0',
    versionNumber: '0',
    description: '这个文件用于整体',
  },
  {
    name: '文件名称2',
    partNum: '2',
    status: 'In Review',
    projectNum: '1',
    revisionNumber: '1',
    versionNumber: '0',
    description: '仿真文件',
  },
  {
    name: '文件名称3',
    partNum: '1',
    status: 'In Review',
    projectNum: '2',
    revisionNumber: '1',
    versionNumber: '0',
    description: '',
  },
  {
    name: '文件名称4',
    partNum: '2',
    status: 'Approved',
    projectNum: '2',
    revisionNumber: '1',
    versionNumber: '0',
    description: '',
  },
  {
    name: '文件名称5',
    partNum: '3',
    status: 'Editing',
    projectNum: '2',
    revisionNumber: '2',
    versionNumber: '0',
    description: '',
  },
]
</script>