<template>
    <div class="basic">
        <p>最近的改变</p>
        <el-timeline>
            <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp"
            >
                {{ activity.content }}
            </el-timeline-item>
            <el-timeline-item center timestamp="2018/4/2" placement="top">
                Event start
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script lang="ts" setup>
const activities = [
    {
        content: 'Event start',
        timestamp: '2018-04-15',
    },
    {
        content: 'Approved',
        timestamp: '2018-04-13',
    },
    {
        content: 'Success',
        timestamp: '2018-04-11',
    },
]
</script>

<style>
.basic {
    width: 300px;
    margin-bottom: 16px;
}
</style>