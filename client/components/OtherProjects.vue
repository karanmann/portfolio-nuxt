<template>
  <div>
    <div v-for="project in otherProjects" :key="project.id">
      <p>{{ project.id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    otherProjects: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
