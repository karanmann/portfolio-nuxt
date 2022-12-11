<template>
  <section class="home-hero">
    <div class="home-hero__content">
      <h1 class="heading-primary">Hey, I'm Karan Mann.</h1>
      <div class="home-hero__info">
        <p class="text-primary">
          A Frontend focused Web Developer building the Frontend of Websites
          and Web Applications that leads to the success of the overall product.
        </p>
      </div>
      <div class="home-hero__cta">
        <a href="./#projects" class="btn btn--bg">Projects</a>
      </div>
    </div>
    <div class="home-hero__socials">
      <div title="Github" class="home-hero__social">
        <a  href="#" class="home-hero__social-icon-link">
          <img title="Github" src="../assets/images/icons/github-ico.png" alt="icon" class="home-hero__social-icon" />
        </a>
      </div>
      <div  class="home-hero__social">
        <a  href="#" class="home-hero__social-icon-link">
          <img title="Instagram" src="../assets/images/icons/insta-ico.png" alt="icon" class="home-hero__social-icon" />
        </a>
      </div>
      <div  class="home-hero__social">
        <a  href="#" class="home-hero__social-icon-link">
          <img title="LinkedIn" src="../assets/images/icons/linkedin-ico.png" alt="icon" class="home-hero__social-icon" />
        </a>
      </div>
    </div>
    <div class="home-hero__mouse-scroll-icon">
      <div class="mouse"></div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss">
.home-hero {
  color: $primary;
  background: linear-gradient(to right, rgba(245, 245, 245, .8), rgba(245, 245, 245, .8)), url('../assets/images/svg/common-bg.svg');
  background-position: center;
  background-repeat: repeat;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .home-hero__content {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: $primary;
    font-size: 2.2rem;
    text-align: center;
    width: 100%;
    line-height: 1.6;

    .heading-primary {
      font-size: 2.5;
      text-transform: uppercase;
    }

    .home-hero__info {
      width: 80vw
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

    .home-hero__social {
      .home-hero__social-icon-link {
        img {
          height: 3rem;
          width: 3rem;
          padding: 5px;
        }
        img:hover {
          border-radius: 50%;
          box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.5);
          transition: 0.5s;
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
      content: '';
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