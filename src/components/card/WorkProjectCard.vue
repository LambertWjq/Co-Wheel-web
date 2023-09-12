<template>
  <el-row>
    <el-col
        v-for="(o, index) in 2"
        :key="o"
        :span="8"
        :offset="index > 0 ? 2 : 0"
    >
      <el-card :body-style="{ padding: '0px' }">
        <img
            src="https://file2.jdbpcb.com/imgfile/190823/0b46d8f787874f63a7f36ac9f5fce20d.JPG"
            class="image"
        />
        <div class="tag">
          <svg height="20">
            <rect x="0" y="0" width="100%" height="20" fill="#1890FF"/>
            <text x="120" y="15" text-anchor="middle" fill="white"> 公开 </text>
          </svg>
        </div>
        <div style="padding: 14px">
          <p style="font-size: 24px;font-weight: bold">项目名称</p>
          <p>项目描述文本，阿巴阿巴</p>
          <p style="color:#6b778c">创建来自：作者</p>
          <el-divider></el-divider>
          <div class="bottom">
            <el-button type="text" :icon="User">1</el-button>
            <el-button type="text" :icon="DataAnalysis">0</el-button>
            <el-button text class="button" :icon="Right"></el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType} from "vue";
import {DataAnalysis, Right, User} from "@element-plus/icons-vue";

export interface WorkProjectProps {
  id: number;
  avatar?: string;
  title: string;
  description: string;
}

export default defineComponent({
  name: 'WorkProjectCard',
  computed: {
    Right() {
      return Right
    },
    User() {
      return User
    },
    DataAnalysis() {
      return DataAnalysis
    }
  },
  props: {
    list: {
      type: Array as PropType<WorkProjectProps[]>,
      required: true,
    },
  },
  setup(props) {

  },
})
</script>

<style scoped>
.tag {
  width: 100vh;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
