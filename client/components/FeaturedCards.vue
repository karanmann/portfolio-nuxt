<template>
  <section class="featured-card__container">
    <div
      v-for="project in featuredProjects"
      :key="project.id"
      v-animate-on-scroll
      class="featured-card"
    >
      <img :src="project.imageDesktop.png" alt="project" class="featured-card__image" />
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

<style lang="scss" scoped>
.featured-card__container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  .featured-card {
    width: 100%;
    .featured-card__image {
      width: 100%;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);

      &:hover {
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
        opacity: 1;
        transform: translateY(-3px);
        transition: 0.3s ease-in-out;
      }
    }

    @media (min-width: $tablet) {
      width: 48%;
    }

    @media (min-width: $desktop) {
      width: 43%;
    }
  }
}
</style>
