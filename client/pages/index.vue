<template>
  <div class="app-container">
    <navbar-main />
    <hero-main />
    <about-me />
    <project-showcase />
    <div class="save-btn">
      <button @click="showModal = true">Save</button>
    </div>
    <SavedModal v-show="showModal" />
    <blog-posts />
    <contact-me />
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
