<template>
  <section id="home" class="home-hero flex-center">
    <div v-animate-on-scroll class="home-hero__content flex-center">
      <h1 class="heading-primary">Hello, I'm Karan Mann.</h1>
      <div class="home-hero__info">
        <p class="text-primary">
          A frontend developer with a passion for coding, solving problems and creating
          awesome and meaningful products for people to love ❤️. I also have a background
          in culinary arts 👨‍🍳."
        </p>
      </div>
      <div class="home-hero__cta">
        <a href="./#projects" class="btn btn--bg">Projects</a>
      </div>
    </div>
    <div class="home-hero__socials">
      <div title="Github" class="home-hero__social">
        <a
          href="https://github.com/karanmann"
          class="home-hero__social-icon-link"
          target="_blank"
        >
          <img
            src="@/assets/icons/github-ico.png"
            alt="icon"
            class="home-hero__social-icon"
          />
        </a>
      </div>
      <div class="home-hero__social">
        <a
          href="https://www.linkedin.com/in/karanmann84/"
          class="home-hero__social-icon-link"
          target="_blank"
        >
          <img
            src="@/assets/icons/linkedin-ico.png"
            alt="icon"
            class="home-hero__social-icon"
          />
        </a>
      </div>
    </div>
    <div v-animate-on-scroll class="home-hero__mouse-scroll-icon">
      <div class="mouse"></div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss">
.home-hero {
  color: $primary;
  background: linear-gradient(
      to right,
      rgba(245, 245, 245, 0.8),
      rgba(245, 245, 245, 0.8)
    ),
    url("../assets/images/svg/common-bg.svg");
  background-position: center;
  background-repeat: repeat;
  background-attachment: fixed;

  height: 100vh;
  position: relative;

  .home-hero__content {
    color: $primary;
    font-size: 1.2rem;
    text-align: center;
    width: 90%;
    line-height: 1.6;

    .heading-primary {
      font-size: 3rem;
      text-transform: uppercase;
    }

    .home-hero__info {
      width: 80vw;
      .text-primary {
        font-size: 25px;
        text-align: center;
        line-height: 1.6;
      }
    }
  }

  .home-hero__socials {
    position: fixed;
    top: 50%;
    left: 0;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
    transform: translateY(-50%);
    height: 14rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    background: $yellow;
    display: none;

    @media screen and (min-width: $desktop) {
      display: flex;
    }

    .home-hero__social {
      .home-hero__social-icon-link {
        img {
          height: 56px;
          width: 56px;
          padding: 5px;
          border-radius: 50%;
        }
        img:hover {
          box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
          transition: 0.3s ease-in;
        }
      }
    }
  }

  .home-hero__mouse-scroll-icon {
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);

    .mouse {
      width: 25px;
      height: 40px;
      border: 2px solid #000;
      border-radius: 60px;
      position: relative;
      overflow: hidden;
    }

    .mouse::before {
      content: "";
      width: 5px;
      height: 5px;
      position: absolute;
      top: 7px;
      left: 50%;
      transform: translateX(-50%);
      background-color: black;
      border-radius: 50%;
      opacity: 1;
      animation: wheel 1.3s infinite;
      -webkit-animation: wheel 1.3s infinite;
    }

    @keyframes wheel {
      to {
        opacity: 0;
        top: 27px;
      }
    }

    @-webkit-keyframes wheel {
      to {
        opacity: 0;
        top: 27px;
      }
    }
  }
}
</style>
