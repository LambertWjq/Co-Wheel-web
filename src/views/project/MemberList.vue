<template>
  <div class="member" v-for="member in list" :key="member.id">
    <div class="avatar">
      <el-avatar :size="40" :src="member.avatar" />
      <div class="username">
        <p style="font-weight: bold;font-size: 18px;">Username</p>
        <p>100000000@qq.com</p>
      </div>
    </div>
    <div>
      <el-select v-model="value" class="m-2" placeholder="Select">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType} from "vue";
import { reactive, toRefs, ref } from 'vue'



const state = reactive({
  circleUrl:
      'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
      'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const,
})

const { circleUrl, squareUrl, sizeList } = toRefs(state)

export interface MemberProps {
  id: number;
  avatar?: string;
  userName: string;
  email: string;
  character: string;
}

export default defineComponent({
  name: 'MemberList',
  props: {
    list: {
      type: Array as PropType<MemberProps[]>,
      required: true,
    },
  },
  setup(props) {
    const memberList = computed(() => {
      return props.list.map(column => {
        if (!column.avator) {
          column.avatar = circleUrl;
        }
        return column;
      })
    })
    const value = ref('')
    const options = [
      {
        value: 1,
        label: 'Owner',
      },
      {
        value: 2,
        label: 'Manager',
      },
      {
        value: 3,
        label: 'Member',
      },
    ]
    return { memberList, options, value }
  },
})

</script>

<style scoped>
.member {
  width: 100%;
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
}

.avatar {
  display: flex;
  align-content: center;
}

.username {
  margin-left: 16px;
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