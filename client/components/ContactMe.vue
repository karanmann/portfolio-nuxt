<template>
  <div id="contact-me" class="contact-me">
    <section class="flex-center">
      <h2 class="title">Contact Me</h2>
      <div class="yellow-line"></div>
      <p class="paragraph">
        Get in touch regarding any projects or opportunities you may have or lets just
        talk about code.
      </p>
      <div v-animate-on-scroll class="contact-me__icon-container">
        <a href="https://github.com/karanmann" class="contact-me__icon">
          <img
            src="../assets/icons/github-color.png"
            alt="Github Link"
            height="60"
            width="60"
          />
          <p>Github</p>
        </a>
        <a href="https://www.instagram.com/frontendchef/" class="contact-me__icon">
          <img
            src="../assets/icons/instagram-color.png"
            alt="Instagram Link"
            height="60"
            width="60"
          />
          <p>Instagram</p>
        </a>
        <a href="https://www.linkedin.com/in/karanmann84/" class="contact-me__icon">
          <img
            src="../assets/icons/linkedin-color.png"
            alt="Linkedin Link"
            height="60"
            width="60"
          />
          <p>LinkedIn</p>
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
  text-align: center;
  .contact-me__icon-container {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;

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
    p {
      font-weight: 600;
    }
  }
}
</style>
