<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import WorkProjectCard, {type WorkProjectProps} from '@/components/card/WorkProjectCard.vue';
import fileTable from '@/components/FileTable.vue';
import {Plus, Upload} from "@element-plus/icons-vue";
import { UploadFilled } from '@element-plus/icons-vue'

const activeName = ref('project')
const dialogVisible = ref(false)
const file = ref(null)


const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const showDialog = () => {
  dialogVisible.value = true;
}

const uploadFile = () => {
  dialogVisible.value = false;
}

</script>

<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="项目" name="project">
      <WorkProjectCard list=""></WorkProjectCard>
    </el-tab-pane>
    <el-tab-pane label="文件" name="file">
      <file-table></file-table>
    </el-tab-pane>
  </el-tabs>
  <el-button
      style="position: absolute; right: 16px;top: 70px"
      :icon="Plus"
  >
    新建
  </el-button>
  <el-button
      style="position: absolute; right: 104px;top: 70px"
      :icon="Upload"
      @click="showDialog"
  >
    上传
  </el-button>
  <el-dialog v-model="dialogVisible" title="上传文件">
    <el-upload
        class="upload-demo"
        drag
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500kb
        </div>
      </template>
    </el-upload>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="uploadFile">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
