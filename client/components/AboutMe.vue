<template>
  <div id="aboutme" class="about-me">
    <section class="about-me__top-container flex-center">
      <h2 class="title">About Me</h2>
      <div class="yellow-line"></div>
    </section>
    <p v-animate-on-scroll class="paragraph">
      Here you will find more information about me, what I do, and my current skills
      mostly in terms of programming and technology.
    </p>
    <section v-animate-on-scroll class="about-me__bottom-container">
      <div class="about-me__bottom-container-left">
        <h3 class="secondary-title">Get to know me!</h3>
        <div class="about-me__bottom-container-left-text">
          <p class="paragraph">
            I'm a <b>Frontend Web Developer</b> building the Front-end of Websites and Web
            Applications that leads to the success of the overall product. Check out some
            of my work in the <a href="#projects"><b>Projects</b></a> section.
          </p>
          <p class="paragraph">
            I also like sharing content related to the stuff that I have learned over the
            years in <b>Web Development</b> so it can help other people of the Dev
            Community. Feel free to Connect or Follow me on my
            <a href="https://www.linkedin.com/in/karanmann84/"><b>LinkedIn</b></a>
            where I post useful content related to Web Development and Programming
          </p>
          <p class="paragraph">
            I'm open to <b>Job opportunities</b> where I can contribute, learn and grow.
            If you have a good opportunity that matches my skills and experience then
            don't hesitate to <b>contact</b> me.
          </p>
        </div>
      </div>
      <div class="about-me__bottom-container-right">
        <h3 class="secondary-title">My Skills</h3>
        <div class="about-me__bottom-container-right-pills">
          <p
            v-for="(skill, index) in skills"
            :key="index"
            class="about-me__bottom-container-right-pills-font"
          >
            {{ skill }}
          </p>
        </div>
      </div>
    </section>
    <div class="home-hero__cta flex-center">
      <a href="#contact-me">
        <button class="btn btn--med">contact me</button>
      </a>
    </div>
  </div>
</template>

<script>
import skillsData from "../data/skills.json";
export default {
  data() {
    return {
      skills: skillsData,
    };
  },
};
</script>

<style lang="scss">
.about-me {
  background-color: $background-grey;
  padding: 7rem 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .about-me__bottom-container {
    display: flex;
    gap: 2rem;
    flex-direction: column;

    @media (min-width: $desktop) {
      flex-direction: row;
    }
  }

  .about-me__bottom-container-left-text > .paragraph {
    margin: 1rem 0rem;
  }

  .about-me__bottom-container-right-pills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    .about-me__bottom-container-right-pills-font {
      background-color: rgb(183, 183, 183);
      padding: 0.5rem 0.7rem;
      margin: 0.2rem 0.4rem 0.2rem 0;
      width: fit-content;
      color: black;
      border-radius: 7px;
      font-size: 14px;
      font-weight: 400;
      @media (min-width: $desktop) {
        font-size: 16px;
      }
    }
  }
}
</style>
