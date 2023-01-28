<template>
  <div id="blogs" class="blogs">
    <section class="flex-center">
      <h2 class="title">Blog Posts</h2>
      <div class="yellow-line"></div>
    </section>
    <section
      class="blogs__cards-container"
    >
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
export default {
  data() {
    return {
      blogs: [
        {
          image: "/blogs/jserrors.png",
          url:
            "https://karan-mann.medium.com/hello-everyone-i-hope-you-all-are-doing-great-b58adb868d27",
          title: "Different errors in javascript and what they mean",
          desc:
            "Hello everyone, I hope you all are doing great. In this blog we will discuss about different errors in javascript and what they mean. so, let’s get started.",
        },
        {
          image: "/blogs/jsdynamicimports.png",
          url:
            "https://karan-mann.medium.com/i-have-never-had-the-privilege-to-use-dynamic-imports-until-very-recently-when-i-used-them-to-power-956c0568ee56",
          title:
            "Dynamic imports & to use them to power code splitting in a React applications",
          desc:
            "I have never had the privilege to use dynamic imports until very recently when I used them to power code splitting in a React application, and I had to do a bit of research because they are slightly different from static imports.",
        },
        {
          image: "/blogs/cheftoprogrammer.png",
          url: "https://karan-mann.medium.com/from-a-chef-to-a-programmer-3d0d2f264ad2",
          title: "From a Chef to a Programmer",
          desc: "What I learned in the kitchen and apply to my programming career.",
        },
        {
          image: "/blogs/reactrouter.png",
          url:
            "https://karan-mann.medium.com/what-is-react-router-why-use-it-and-how-to-use-it-a0cd5bf6376e",
          title: "What is React Router, Why use it and How to use it ?",
          desc:
            "What is React Router? React router is a fully featured client and server side routing library for ReactJS.",
        },
        {
          image: "/blogs/git.png",
          url: "https://karan-mann.medium.com/lets-git-to-it-2343c55af51f",
          title: "< Lets Git to it >_",
          desc:
            "I know using git especially as a command line interface can be quite daunting in the beginning.",
        },
        {
          image: "/blogs/nodeexpress.png",
          url: "https://karan-mann.medium.com/basic-express-node-server-8bbe6463a257",
          title: "Basic Express & Node Server",
          desc:
            "A few days back I was talking to a few friends who like me are beginners in coding. So I thought I would write a little article about how to setup a basic node and express server from scratch.",
        },
      ],
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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 1.5rem;
  }
}
</style>
