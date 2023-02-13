<template>
  <div id="contact-me" class="contact-me">
    <section class="flex-center">
      <h2 class="title">Contact Me</h2>
      <div class="yellow-line"></div>
      <p class="paragraph">
        Feel free to Contact me regarding any projects or opportunities you may have or
        lets just grab a coffee and talk about code.
      </p>
      <div class="contact-me__icon-container" v-animate-on-scroll>
        <a href="https://github.com/karanmann" class="contact-me__icon">
          <img
            src="../assets/icons/github-color.png"
            alt="Github Link"
            height="70"
            width="70"
          />
        </a>
        <a href="https://www.instagram.com/frontendchef/" class="contact-me__icon">
          <img
            src="../assets/icons/instagram-color.png"
            alt="Instagram Link"
            height="70"
            width="70"
          />
        </a>
        <a href="https://www.linkedin.com/in/karanmann84/" class="contact-me__icon">
          <img
            src="../assets/icons/linkedin-color.png"
            alt="Linkedin Link"
            height="70"
            width="70"
          />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.contact-me {
  .contact-me__icon-container {
    display: flex;
    gap: 3rem;
    margin-top: 2rem;

    .contact-me__icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
