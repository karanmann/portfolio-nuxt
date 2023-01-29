<template>
  <div id="blogs" class="blogs">
    <section class="flex-center">
      <h2 class="title">Blog Posts</h2>
      <div class="yellow-line"></div>
    </section>
    <section class="blogs__cards-container">
      <blog-cards
        v-for="blog in blogs"
        :key="blog.title"
        :image="blog.image"
        :title="blog.title"
        :url="blog.url"
        :desc="blog.desc"
      />
    </section>
  </div>
</template>

<script>
import blogsData from "@/data/blogs.json";
export default {
  data() {
    return {
      blogs: blogsData,
    };
  },
};
</script>

<style lang="scss">
.blogs {
  background-color: $background-grey;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .blogs__cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    width: 100%;
  }
}
</style>
