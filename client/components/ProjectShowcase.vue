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
    <div class="projects__cards-container">
      <featured-cards :featured-projects="featuredProjects" />
      <h2 class="projects__cards-container-h2">Other Projects</h2>
      <other-projects :other-projects="otherProjects" />
    </div>
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
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .projects__cards-container-h2 {
      margin-top: 5rem;
    }
  }
}
</style>
