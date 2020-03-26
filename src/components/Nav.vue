<template>
  <div class="navbar">
    <nav class="navbar is-info">
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">
            Home
          </router-link>
        </div>
        <div class="navbar-end">
          <!-- <router-link class="navbar-item" to="/faq">
            FAQ
          </router-link> -->
          <router-link class="navbar-item" to="/blog">
            Blog Posts
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "nav"
};
</script>

<style>
nav {
  min-height: 60vh;
  text-transform: uppercase;
}

a {
  text-decoration: none;
  color: rgb(63, 63, 63);
  font-weight: 900;
}
a:hover {
  color: palevioletred;
}
</style>
