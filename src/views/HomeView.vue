<script setup lang="ts">
import ProjectCard, {type ProjectProps} from '@/components/card/ProjectCard.vue';
import TimeCard from '@/components/card/TimeCard.vue';
import RecommendCard from '@/components/card/RecommendCard.vue';

const testProjectData: ProjectProps[] = [{
  id: 1,
  author: 'Author Name',
  title: 'The Project',
  time: 'update time',
  description: ['Add the new file', 'Change the main board'],
},
  {
    id: 2,
    author: 'Author Name 2',
    title: 'The Project 2',
    time: 'update time',
    description: ['Add the new file', 'Change the main board'],
  },
  {
    id: 3,
    author: 'Author Name 3',
    title: 'The Project 2',
    time: 'update time',
    description: ['Add the new file', 'Change the main board'],
  },
];

</script>

<template>
  <div class="contain">
    <div>
      <ProjectCard :list="testProjectData"></ProjectCard>
    </div>
    <div class="time-card">
      <TimeCard></TimeCard>
      <RecommendCard></RecommendCard>
      <RecommendCard></RecommendCard>
      <RecommendCard></RecommendCard>
    </div>
  </div>
</template>

<style>
.contain {
  display: flex;
  justify-content: space-between;
  width: 100vh;
}

.time-card {
  margin-left: 32px;
}
</style>
