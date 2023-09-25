<script setup lang="ts">

import {reactive, ref} from "vue";
import type {PropType} from "vue";
import {Plus} from "@element-plus/icons-vue";
import {myClassStore} from "@/store/classes";

export interface ClassesListObj {
  id: number,
  title: string,
  info: string,
  start?: number,
  like?: number,
  member?: number,
}

const props = defineProps({
  classesList: {
    type: Array as PropType<ClassesListObj[]>,
  }
});

const dialogForm = ref(false)
const myClassList = myClassStore()
const classForm = reactive({} as ClassesListObj)
const formLabelWidth = '140px'

const buidUUID = () => {
  var temp_url = URL.createObjectURL(new Blob());
  var uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  return uuid.substring(uuid.lastIndexOf("/") + 1);
}
const addClass = () => {
  if(!classForm.title) {
    dialogForm.value = false;
    return;
  }
  classForm.id = buidUUID();
  myClassList.addClass(classForm);
  dialogForm.value = false;
}
const classId = (item: ClassesListObj) => {
  return '/class?id=' + item?.id;
}
</script>

<template>
  <el-row>
    <el-card class="classes-card">
      <el-button class="button" round :icon="Plus" @click="dialogForm = true">添加班级</el-button>
      <el-divider />
      <template v-for="item in classesList" :key="item.id">
        <div class="classItem">
          <div class="classItem-1">
            <router-link :to="classId(item)" class="class-title">{{ item.title }} </router-link>
          </div>
          <div class="classItem-2">
            <span class="classitem-2-span" title="点赞">👍{{ item.like }}</span>
            <span class="classitem-2-span" title="收藏">☆{{ item.start }}</span>
            <span class="classitem-2-span" title="成员">🤷‍♂️{{ item.member }}</span>
          </div>
        </div>
      </template>
    </el-card>
  </el-row>

  <el-dialog v-model="dialogForm" title="添加班级">
    <el-form :model="classForm">
      <el-form-item label="班级名" :label-width="formLabelWidth">
        <el-input v-model="classForm.title" />
      </el-form-item>
      <el-form-item label="班级简介" :label-width="formLabelWidth">
        <el-input v-model="classForm.info" :autosize="{ minRows: 2, maxRows: 4 }"
                  type="textarea"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogForm = false">Cancel</el-button>
        <el-button type="primary" @click="addClass">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.classes-card {
  width: 100%;
  height: 100%;
}
.classItem {
  margin: 15px 0;
  .classItem-1 {
    margin-bottom: 10px;
  }
  .classitem-2-span {
    margin-right: 30px;
  }
}
.class-title {
  color: rgb(9, 105, 218);
  font-size: 18px;
  text-decoration: none;
}
</style>