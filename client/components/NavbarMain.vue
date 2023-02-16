<template>
  <nav class="navbar">
    <a href="#home" class="logo">
      <img src="@/assets/images/portfolio/me.jpg" alt="karan mann" />
      <h2>KARAN MANN</h2>
    </a>
    <div class="nav-links">
      <a href="#aboutme" rel="noopener noreferrer">About</a>
      <a href="#projects" rel="noopener noreferrer">Projects</a>
      <a href="#blogs" rel="noopener noreferrer">Blogs</a>
      <a href="#contact-me" rel="noopener noreferrer">Contact</a>
    </div>
    <div class="hamburger">
      <div class="menu-toggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul class="menu">
          <a href="#aboutme" rel="noopener noreferrer">
            <li>About</li>
          </a>
          <a href="#projects" rel="noopener noreferrer">
            <li>Projects</li>
          </a>
          <a href="#blogs" rel="noopener noreferrer">
            <li>Blog Posts</li>
          </a>
          <a href="#contact-me" rel="noopener noreferrer">
            <li>Contacts</li>
          </a>
          <div class="menu__socials">
            <a href="https://github.com/karanmann" class="home-hero__social-icon-link">
              <img
                title="Github"
                src="../assets/icons/github-ico.png"
                alt="icon"
                class="home-hero__social-icon"
              />
            </a>
            <a
              href="https://www.instagram.com/frontendchef/"
              class="home-hero__social-icon-link"
            >
              <img
                title="Instagram"
                src="../assets/icons/insta-ico.png"
                alt="icon"
                class="home-hero__social-icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/karanmann84/"
              class="home-hero__social-icon-link"
            >
              <img
                title="LinkedIn"
                src="../assets/icons/linkedin-ico.png"
                alt="icon"
                class="home-hero__social-icon"
              />
            </a>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.navbar {
  position: fixed;
  z-index: 50;
  height: 100px;
  width: 100vw;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  a {
    display: flex;

    img {
      height: 80px;
      width: 80px;
      background-color: $yellow;
      border-radius: 50%;
    }
  }

  .nav-links {
    display: none;

    @media (min-width: $tablet) {
      display: flex;
      flex-direction: row;
      width: 450px;
      justify-content: space-evenly;
      font-weight: 600;
      font-size: 1rem;
      text-transform: uppercase;
    }
  }

  .hamburger {
    display: flex;
    flex-direction: row;

    @media (min-width: $tablet) {
      display: none;
    }

    .menu-toggle {
      display: block;
      position: relative;
      top: 0;
      right: 0;

      input {
        display: block;
        width: 40px;
        height: 32px;
        position: absolute;
        top: -7px;
        left: -5px;
        cursor: pointer;
        opacity: 0;
        z-index: 2;

        &:checked ~ span:nth-last-child(n) {
          opacity: 1;
          transform: rotate(45deg) translate(-2px, -1px);
          background: #232323;
        }

        &:checked ~ span:nth-last-child(3) {
          opacity: 0;
          transform: rotate(0deg) scale(0.2, 0.2);
        }

        &:checked ~ span:nth-last-child(2) {
          transform: rotate(-45deg) translate(-2px, -1px);
        }

        &:checked ~ ul {
          transform: none;
        }
      }

      span {
        display: block;
        width: 37px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        background: #000;
        border-radius: 3px;
        z-index: 1;
        transform-origin: 4px 1px;
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
          background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

        &::first-child {
          transform-origin: 0% 0%;
        }

        &::nth-last-child(2) {
          transform-origin: 0% 100%;
        }
      }
    }

    .menu {
      position: absolute;
      width: 100vw;
      right: -20px;
      top: 60px;
      padding: 50px;
      background: $yellow;
      color: white;
      list-style-type: none;
      transform-origin: 0% 0%;
      transform: translate(-150%, 0);
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
      z-index: 99;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 20%;

      a {
        color: $primary;
        font-weight: 700;

        li {
          padding: 10px 0;
          font-size: 22px;
        }
      }

      .menu__socials {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 2rem;

        a > img {
          height: 30px;
          width: 30px;
        }
      }
    }
  }
}
</style>
