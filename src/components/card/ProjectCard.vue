<template>
  <div class="project" v-for="project in list" :key="project.id">
    <div class="card">
      <div class="title">
        <div class="title-right">
          <el-avatar :size="30" :src="project.avatar"></el-avatar>
          <p class="project-name">{{ project.author }}</p>
          <p class="time">{{ project.time }}</p>
        </div>
        <el-icon><More /></el-icon>
      </div>
      <div>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>{{ project.title }}</span>
            </div>
          </template>
          <div v-for="item in project.description" :key="item" class="text item">
            {{ item }}
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType} from "vue";
import defaultImg from '@/assets/logo.svg'

export interface ProjectProps {
  id: number;
  avatar?: string;
  author: string;
  title: string;
  time: string;
  description: string[];
}

export default defineComponent({
  name: 'ProjectCard',
  props: {
    list: {
      type: Array as PropType<ProjectProps[]>,
      required: true,
    },
  },
  setup(props) {
    const projectList = computed(() => {
      return props.list.map(column => {
        if (!column.avator) {
          column.avatar = defaultImg;
        }
        return column;
      })
    })
    return { projectList }
  },
})

</script>

<style scoped>
.project {
  width: 100vh;
  display: flex;
}

.card {
  margin: 16px;
}

.project-name {
  margin: 4px;
}

.time {
  font-size: 14px;
  color: #a1a1a1;
  margin: 4px;
}

.title-right {
  display: flex;
}

.title {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vh;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100vh;
}
</style>
