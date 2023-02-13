<template>
  <section class="featured-card__container">
    <div
      v-for="project in featuredProjects"
      :key="project.id"
      v-animate-on-scroll
      class="featured-card"
    >
      <img :src="project.imageDesktop.png" alt="project" class="featured-card__image" />
      <div class="featured-card__details">
        <h2>{{ project.title }}</h2>
        <p>{{ project.desc }}</p>
        <div class="featured-card__links">
          <a :href="project.liveLink" target="_blank" rel="noopener noreferrer">
            <img
              src="../assets/icons/external-link.png"
              :alt="project.title"
              height="40"
              width="40"
            />
          </a>
          <a :href="project.githubLink" target="_blank" rel="noopener noreferrer">
            <img
              src="../assets/icons/github-ico.png"
              :alt="project.title"
              height="40"
              width="40"
            />
          </a>
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

<style lang="scss">
.featured-card__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;

  .featured-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 25rem;
    background: lighten($yellow-maize, 30%);
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

    @media (min-width: $desktop) {
      flex-direction: row;
      width: 40rem;
    }

    .featured-card__image {
      width: 100%;
      @media (min-width: $desktop) {
        width: 50%;
      }
    }

    .featured-card__details {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      gap: 2rem;
    }

    &:hover {
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
      opacity: 1;
      transform: translateY(-3px);
      transition: 0.3s ease-in-out;
    }
  }
}
</style>
