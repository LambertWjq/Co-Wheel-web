<script setup lang="ts">

import {onMounted, reactive, ref} from "vue";
import type {PropType} from "vue";
import {Plus} from "@element-plus/icons-vue";
import {classTaskStore} from "@/store/task";
import {useRoute} from "vue-router";

export interface TaskListObj {
  id: number,
  classId: number,
  title: string,
  info: string,
}

// const taskListProps = defineProps({
//   tasks: {
//     type: Array as PropType<TaskListObj[]>,
//   }
// });
const taskDialogForm = ref(false)
const classTaskList = classTaskStore()
const taskForm = reactive({} as TaskListObj)
const formLabelWidth = '140px'
let { query } = useRoute()
const taskList = ref<TaskListObj>(classTaskList.taskList.filter(item => {
  return item.classId === Number(query.id);
}));
const buidUUID = () => {
  var temp_url = URL.createObjectURL(new Blob());
  var uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  return uuid.substring(uuid.lastIndexOf("/") + 1);
}
const addTask = () => {
  if(!taskForm.title) {
    taskDialogForm.value = false;
    return;
  }
  taskForm.id = Number(buidUUID());
  taskForm.classId = Number(query.id);
  classTaskList.addTask(taskForm);
  taskList.value.push(taskForm)
  taskDialogForm.value = false;
}

const infoDialog = ref(false)
const taskTile = ref("");
const taskInfo = ref("");
const showInfo = (item: TaskListObj) => {
  taskTile.value = item.title;
  taskInfo.value = item.info;
  infoDialog.value = true;
}

onMounted(() => {

})
</script>

<template>
  <el-row>
    <el-card class="task-card">
      <el-button class="button" round :icon="Plus" @click="taskDialogForm = true">添加任务</el-button>
      <el-divider />
      <template v-for="item in taskList" :key="item.id">
        <div class="taskItem">
          <div class="taskItem-1">
            <a class="task-title" @click="showInfo(item)">{{ item.title }}</a>
          </div>
          <div class="taskItem-2">
            <span class="taskItem-2-span" title="点赞">👍0</span>
            <span class="taskItem-2-span" title="收藏">☆0</span>
            <span class="taskItem-2-span" title="成员">🤷‍♂️1</span>
          </div>
        </div>
      </template>
    </el-card>
  </el-row>

  <el-dialog v-model="taskDialogForm" title="添加任务">
    <el-form :model="taskForm">
      <el-form-item label="任务名" :label-width="formLabelWidth">
        <el-input v-model="taskForm.title" />
      </el-form-item>
      <el-form-item label="班级简介" :label-width="formLabelWidth">
        <el-input v-model="taskForm.info" :autosize="{ minRows: 2, maxRows: 4 }"
                  type="textarea"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="taskDialogForm = false">Cancel</el-button>
        <el-button type="primary" @click="addTask">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>

  <el-dialog v-model="infoDialog">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ taskTile }}</span>
        </div>
      </template>
      <div class="text item">{{ taskInfo }}</div>
    </el-card>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="infoDialog = false">关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.task-card {
  width: 100%;
  height: 100%;
}
.taskItem {
  margin: 15px 0;
  .taskItem-1 {
    margin-bottom: 10px;
  }
  .taskItem-2-span {
    margin-right: 30px;
  }
}
.task-title {
  color: rgb(9, 105, 218);
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
}
</style>