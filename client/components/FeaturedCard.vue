<template>
  <div>
    <div v-for="project in featuredProjects" :key="project.id">
      <p>{{ project.id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    featuredProjects: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
