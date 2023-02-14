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
        <ul class="card__pills-container">
          <li v-for="tech in project.techUsed" :key="tech" class="card__pills">
            {{ tech }}
          </li>
        </ul>
        <div class="other-project__links">
          <a :href="project.liveLink" target="_blank" rel="noopener noreferrer">
            <img
              src="../assets/icons/live-ico.png"
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
    height: 30rem;

    @media (min-width: $tablet) {
      width: 20rem;
    }

    .other-project__card-image {
      width: 100%;
      height: 50%;
    }

    .other-project__card-details {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 50%;

      .other-project__links {
        text-align: right;
        margin: 0 1rem;
        a {
          margin: 0 0.2rem;
          img {
            &:hover {
              transform: scale(1.3);
              transition: 0.3s ease-in;
            }
          }
        }
      }
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
