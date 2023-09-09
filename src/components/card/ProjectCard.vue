<template class="project-card">
    <div class="title">
        <div class="title-right">
            <el-avatar :size="30" icon="el-icon-data-line"></el-avatar>
            <p class="project-name">项目名称</p>
            <p class="time">更新时间</p>
        </div>
        <el-icon><More /></el-icon>
    </div>
    <div>
        <el-card class="box-card">
        <template #header>
        <div class="card-header">
            <span>Card name</span>
        </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
    </div>
</template>

<style setup>
.project-card {
    margin-bottom: 32px;
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
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1000px;
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
    width: 1000px;
}
</style>
