<script setup lang="ts">
import ProjectCard from '@/components/card/ProjectCard.vue';
import TimeCard from '@/components/card/TimeCard.vue';
</script>

<template>
    <div class="contain">
      <div class="project-card">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
      <div class="time-card">
        <TimeCard></TimeCard>
      </div>
    </div>
</template>

<style>
.contain {
  display: flex;
  justify-content: space-between;
}

.project-card {
  width: auto;
  padding-bottom: 16px;
}

.time-card {
  margin-left: 32px;
}
</style>
