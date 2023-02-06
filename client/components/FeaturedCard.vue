<template>
  <section>
    <div>
      <div>
        <div v-for="project in featuredProjects" :key="project.id">
          <p>{{ project.id }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    featuredProjects: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
