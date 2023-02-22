<template>
  <div class="random-quotes">
    <section class="flex-center">
      <h2 class="title">Random Programming Quotes</h2>
      <div class="yellow-line"></div>
      <div class="random-quotes__container">
        <p class="random-quotes__quote">󠀬󠀬" {{ randomQuote.en }} 󠀬"</p>
        <p class="random-quotes__author">
          - <i>{{ randomQuote.author }}</i>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import quotesData from "@/data/randomQuotes.json";

export default {
  data() {
    return {
      randomQuote: quotesData[Math.floor(Math.random() * quotesData.length)],
    };
  },
};
</script>

<style lang="scss">
.random-quotes {
  background-color: $background-grey;
  .flex-center {
    text-align: center;
    .random-quotes__container {
      margin-top: 1rem;
      .random-quotes__quote {
        font-size: 1.5rem;
      }
      .random-quotes__author {
        text-align: right;
        font-size: 1.5rem;
        margin-top: 1rem;
      }
    }
  }
}
</style>
