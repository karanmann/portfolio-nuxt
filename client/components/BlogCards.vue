<template>
  <div class="blog-card">
    <img :src="image" :alt="title" class="blog-card__image" />
    <div class="blog-card__description">
      <h3 class="blog-card__description-title">{{ title }}</h3>
      <p class="blog-card__description-text">{{ desc }}</p>
      <a :href="url" class="blog-card__description-link" target="_blank">
        <button class="blog-card__description-link-button">Read More</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { default: "", type: String },
    image: { default: "", type: String },
    desc: { default: "", type: String },
    url: { default: "", type: String },
  },
};
</script>

<style lang="scss">
.blog-card {
  display: flex;
  flex-direction: column;
  background: lighten($card_white, 10%);
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding: 1rem;
  opacity: 0.9;
  height: 450px;

  .blog-card__image {
    height: 50%;
  }

  .blog-card__description {
    position: relative;
    height: 50%;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    gap: 1rem;


    .blog-card__description-link {
      position: absolute;
      right: 10px;
      bottom: 10px;
      button {
        background: none;
        border: 2px solid $orange;
        font-weight: 700;
        font-size: 0.8rem;
        line-height: 1;
        margin: 0.5em;
        padding: 1em 2em;
        transition: 0.2s ease-in;
        box-shadow: 0.3em 0.3em 0 0 $orange, inset 0.3em 0.3em 0 0 $orange;
        &:hover,
        &:focus {
          box-shadow: 0 0 0 0 $orange, inset 6em 3.5em 0 0 $orange;
        }
      }
    }
  }

  &:hover {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
    opacity: 1;
    transform: translateY(-3px);
    transition: 0.3s ease-in-out;
  }
}
</style>
