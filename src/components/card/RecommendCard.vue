<template class="recommend-card">
    <div class="title">
        <div class="title-right">
            <el-avatar :size="20" icon="el-icon-data-line"></el-avatar>
            <p class="project-name">项目名称</p>
        </div>
        <el-icon><Star /></el-icon>
    </div>
    <p class="describe">这是一段关于项目作用的简短描述</p>
    <div class="title-right">
        <div class="icon-text">
            <el-icon style="margin: 0 4px;"><Star /></el-icon>
            <p>1.1k</p>
        </div>
        <div class="icon-text">
            <span style="margin: 0 5px;"><span class="circle"></span></span>
            <p>标签</p>
        </div>
    </div>
</template>

<style scoped>
.recommend-card {
  margin-bottom: 32px;
  width: 100vh;
}

.project-name {
    margin: 4px;
}

.describe {
    font-size: 14px;
    color: #a1a1a1;
    margin: 4px;
}

.title-right {
    display: flex;
    align-items: center;
}

.title {
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vh;
  max-width: 200px;
}

.circle {
    width: 10px;
    height: 10px;
    display: inline-block;
    background-color: blue;
    border-radius: 50%;
}

.icon-text {
    display: flex;
    align-items: center;
}

</style>
