<template>
  <section>
    <div v-for="project in otherProjects" :key="project.id">
      <p>{{ project.id }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    otherProjects: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
