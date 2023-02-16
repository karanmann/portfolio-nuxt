<template>
  <section class="featured-card__container">
    <div
      v-for="project in featuredProjects"
      :key="project.id"
      v-animate-on-scroll
      class="featured-card"
    >
      <nuxt-img
        :src="project.imageDesktop.webp"
        alt="project"
        class="featured-card__image"
      />
      <div class="featured-card__desc">
        <h2>{{ project.title }}</h2>
        <p>{{ project.desc }}</p>
        <ul class="card__pills-container">
          <li v-for="tech in project.techUsed" :key="tech" class="card__pills">
            {{ tech }}
          </li>
        </ul>
        <div class="other-project__links">
          <a :href="project.liveLink" target="_blank" rel="noopener noreferrer">
            <img
              src="../assets/icons/live-color.png"
              :alt="project.title"
              height="40"
              width="40"
            />
          </a>
          <a :href="project.githubLink" target="_blank" rel="noopener noreferrer">
            <img
              src="../assets/icons/github-color.png"
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
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    background-color: $background-grey;

    .featured-card__image {
      width: 100%;
      height: 35%;
      overflow: hidden;
      object-fit: cover;
      position: relative;
    }

    .featured-card__desc {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 1rem;
      width: 100%;
      height: 65%;

      .other-project__links {
        text-align: right;
        margin: 0 1rem;
        a {
          margin: 0 0.2rem;
          img {
            color: white;
            &:hover {
              transform: scale(1.3);
              transition: 0.3s ease-in;
            }
          }
        }
      }
    }

    @media (min-width: $tablet) {
      width: 48%;
      height: 32rem;
    }

    @media (min-width: $desktop) {
      height: 100%;
      .featured-card__desc {
        display: flex;
        justify-content: space-evenly;
        font-size: 1.2rem;
        position: absolute;
        height: 0;
        top: 0;
        opacity: 0;
        color: $yellow-maize;
        background-color: rgba(0, 0, 0, 0.8);
        overflow-y: scroll;
        transition: 0.8s ease;
        overflow: hidden;
        width: 100%;
      }

      width: 43%;
      &:hover {
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
        transform: translateY(-3px);
        transition: 0.3s ease-in-out;
        .featured-card__desc {
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          opacity: 1;
          height: 100%;
          padding: 1rem 2rem;
        }
      }
    }
  }
}
</style>
