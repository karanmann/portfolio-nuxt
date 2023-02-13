<template>
  <section class="other-project__container">
    <div
      v-for="project in otherProjects"
      :key="project.id"
      v-animate-on-scroll
      class="other-project__card"
    >
      <img
        class="other-project__card-image"
        :src="project.imageDesktop.png"
        alt=""
        height="200"
        width="320"
      />
      <div class="other-project__card-details">
        <h3>{{ project.title }}</h3>
        <p>{{ project.desc }}</p>
        <div class="other-project__links">
          <a :href="project.liveLink" target="_blank" rel="noopener noreferrer">
            <img
              src="../assets/icons/external-link.png"
              :alt="project.title"
              height="20"
              width="20"
            />
          </a>
          <a :href="project.githubLink" target="_blank" rel="noopener noreferrer">
            <img
              src="../assets/icons/github-ico.png"
              :alt="project.title"
              height="20"
              width="20"
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
    otherProjects: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.other-project__container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  .other-project__card {
    background: $card-grey;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    width: 100%;

    @media (min-width: $tablet) {
      width: 20rem;
    }

    .other-project__card-image {
      width: 100%;
    }

    .other-project__card-details {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    &:hover {
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
      opacity: 1;
      transform: translateY(-3px);
      transition: 0.3s ease-in-out;
    }
  }
}
</style>
