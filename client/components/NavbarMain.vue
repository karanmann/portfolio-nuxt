<template>
  <nav class="navbar">
    <section class="navbar__left">
      <a href="#">
        <img src="../assets/images/portfolio/me.png" alt="karan mann">
        <h2>KARAN MANN</h2>
      </a>
    </section>
    <section class="navbar__right">
      <a href="#">
        <h2>ABOUT</h2>
      </a>
      <a href="#">
        <h2>PROJECTS</h2>
      </a>
      <a href="#">
        <h2>CONTACT</h2>
      </a>
    </section>
  </nav>
</template>

<script>

</script>

<style lang="scss">
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 50px;

  .navbar__left {
    a {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      padding: 20px 30px;

      img {
        border-radius: 50%;
        background-color: rgb(224, 216, 58);
        background-size: fill;
        height: 3rem;
        width: 3rem;
      }
    }
  }

  .navbar__right {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    a {
      font-size: .7rem;
      
    }
  }
}
</style>