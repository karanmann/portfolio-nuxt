<template>
  <div id="projects" class="projects">
    <section class="flex-center">
      <h2 class="title">Projects</h2>
      <div class="yellow-line"></div>
      <p class="paragraph">
        Here you will find some of the personal and clients projects that I created with
        each project containing its own case study
      </p>
    </section>
    <section class="projects__cards-container">
      <!-- <div v-for="project in projects" :key="project.id" class="projects__project-card">
        <div v-if="project.featured" class="projects__featured-card">
          <img :src="project.imageDesktop.png" alt="project.title" />
          <div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.desc }}</p>
            <a :href="project.liveLink" target="_blank" rel="noopener noreferrer">
            <button>Know More</button>
          </a>
            <nuxt-link to="/projects/`${project.id}`">
              <button>Know More</button>
            </nuxt-link>
          </div>
        </div>
      </div> -->
      <FeaturedCard :featured-projects="featuredProjects" />
      <OtherProjects :other-projects="otherProjects" />
    </section>
  </div>
</template>

<script>
import projectsData from "@/data/projects.json";

const myfeaturedProjects = projectsData.filter((myProjects) => myProjects.featured);
const myotherProjects = projectsData.filter((myProjects) => !myProjects.featured);

export default {
  data() {
    return {
      projects: projectsData,
      featuredProjects: myfeaturedProjects,
      otherProjects: myotherProjects,
    };
  },
};
</script>

<style lang="scss">
.projects {
  background-color: $white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .projects__cards-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .projects__project-card {
      display: flex;
      flex-direction: column;
      background: lighten($card_white, 10%);
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
      padding: 1rem;
      opacity: 0.9;
      gap: 1rem;
      width: 20rem;
      background-color: #f0f0f0;

      .projects__featured-card {
        img {
          width: 100%;
        }
      }
    }

    @media (min-width: $tablet) {
      .projects__project-card {
        flex-direction: row;
        width: 90%;
        .projects__featured-card {
          img {
            width: 10rem;
          }
        }
      }
    }

    @media (min-width: $desktop) {
      .projects__project-card {
        flex-direction: row;
        width: 70%;
        .projects__featured-card {
          img {
            width: 20rem;
          }
        }
      }
    }
  }
}
</style>
