<template>
  <div class="app-container">
    <navbar-main />
    <hero-main />
    <about-me />
    <project-showcase />
    <blog-posts />
    <contact-me />
    <random-quotes />
    <the-footer />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style lang="sass"></style>
