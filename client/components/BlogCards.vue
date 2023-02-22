<template>
  <div v-animate-on-scroll class="blog-card">
    <a :href="url" target="_blank" :alt="title">
      <nuxt-img
        :src="image.jpg"
        width="288"
        height="187"
        :alt="title"
        class="blog-card__image"
      />
    </a>
    <div class="blog-card__description">
      <h3 class="blog-card__description-title">{{ title }}</h3>
      <p class="blog-card__description-text">{{ desc }}</p>
      <a :href="url" class="blog-card__description-link" target="_blank" :alt="title">
        <button class="blog-card__description-link-button">Read Blog</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-card {
  display: flex;
  flex-direction: column;
  background: $card_white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding: 0.5rem;
  opacity: 0.9;
  height: 500px;
  width: 90%;

  @media (min-width: $tablet) {
    width: 45%;
  }
  @media (min-width: $desktop) {
    width: 31%;
  }

  .blog-card__image {
    object-fit: fill;
    width: 100%;
  }

  .blog-card__description {
    position: relative;
    height: 50%;
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
    gap: 1rem;

    .blog-card__description-link {
      position: absolute;
      right: 10px;
      bottom: -40px;
      button {
        cursor: pointer;
        background: none;
        border: 1px solid $yellow;
        font-weight: 700;
        font-size: 0.8rem;
        line-height: 1;
        margin: 0.5em;
        padding: 1em 2em;
        transition: 0.2s ease-in;
        box-shadow: 0.3em 0.3em 0 0 $yellow, inset 0.3em 0.3em 0 0 $yellow;
        &:hover,
        &:focus {
          box-shadow: 0 0 0 0 $yellow, inset 6em 3.5em 0 0 $yellow;
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

.before-enter {
  opacity: 0;
  transform: scale(0.5) rotateZ(-25deg);
  transition: all 1s ease-out;
}

.enter {
  opacity: 1;
  transform: scale(1) rotateZ(0deg);
  transition: all 1s ease-out;
}
</style>
