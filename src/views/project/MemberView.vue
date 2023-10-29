<template>
  <div class="top-bar">
    <span class="title">团队成员</span>
    <div class="right">
      <el-input v-model="inputMember" placeholder="搜索">
        <template #prefix>
          <el-icon class="el-input__icon">
            <Search />
          </el-icon>
        </template>
      </el-input>
      <el-button
        color="#0057FE"
        style="margin-left: 12px;"
        icon="Plus"
      >
        添加成员
      </el-button>
    </div>
  </div>
  <el-table
    ref="multipleTableRef"
    class="table"
    :data="tableData"
    style="width: 100%;height: 100%"
  >
    <el-table-column type="selection" width="30" />
    <el-table-column prop="name" label="名字" width="180">
      <template #default="scope">
        <div>
          <el-avatar style="margin-right: 4px;width: 24px;height: 24px" :icon="UserFilled" />
          <span>{{ scope.row.name }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="180"
      :filters="[
          { text: 'Active', value: 'Active'},
          { text: 'Office', value: 'Office'},
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template #default="scope">
        <el-tag
          :type="scope.row.status === 'Active' ? '' : 'info'"
          disable-transitions
          :style="{color: scope.row.status === 'Active' ? '#0057fe87' : 'info'}"
          :effect="scope.row.status === 'Active' ? 'light' : 'plain'"
          round
        >
          <template #default>
            <div style="display: flex;align-items: center">
              <div
                class="tag-dot"
                :style="{background: scope.row.status === 'Active' ? '#0057FE' : '#909399'}"
              ></div>
              <span>{{ scope.row.status }}</span>
            </div>
          </template>
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="address" label="邮件地址" />
    <el-table-column prop="teams" label="角色" />
    <el-table-column>
      <template #default="scope">
        <el-icon @click="deleteMember(scope.$index)">
          <Delete />
        </el-icon>
        <el-icon style="margin-right: 4px">
          <Edit />
        </el-icon>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { UserFilled, Edit } from '@element-plus/icons-vue'

interface User {
  name: string
  status: string
  address: string
  teams: string[]
}

const inputMember = ref('')
const tableData = ref([
  {
    name: 'Olivia',
    status: 'Active',
    address: 'olivia@untitledui.com',
  },
  {
    name: 'Tom',
    status: 'Offline',
    address: 'tom@untitledui.com',
  },
  {
    name: 'Lana',
    status: 'Offline',
    address: 'lana@untitledui.com',
  },
  {
    name: 'Cano',
    status: 'Active',
    address: 'cana@untitledui.com',
  },
  {
    name: 'Tom',
    status: 'Offline',
    address: 'tom@untitledui.com',
  },
  {
    name: 'Lana',
    status: 'Offline',
    address: 'lana@untitledui.com',
  },
  {
    name: 'Cano',
    status: 'Active',
    address: 'cana@untitledui.com',
  },
])

const filterTag = (value: string, row: User) => {
  return row.status === value
}

function deleteMember(index: number) {
  tableData.value.splice(index, 1)
}
</script>

<style>
.top-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  .right {
    display: flex;
  }
  .title {
    font-size: 24px;
    font-weight: bold;
    width: 200px;
  }
}
.table {
  border-radius: 12px;
  border: solid #ebeef5;
  min-width: 900px;
}
.tag-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 8px;
}
:deep(.el-input__wrapper) {
  border-radius: 12px;
}
:deep(.el-table__fit) {
  border-radius: 12px;
}

</style>